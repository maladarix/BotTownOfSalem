const Discord = require('discord.js');
const Commands = require('./src/commands.js');
const Player = require('./src/player.js');
const Partie = require('./src/game.js');
const commands = require('./src/commands.js');
require("dotenv").config()
const bot = new Discord.Client();
var nbrJoueurMax = 0
var nomgamemode = null
let nouvgmoffi = []
var whispersChannels = []
var interfaces = []
var listejoueur = []
let listeroles = []
let joueurroles = []
let votelist = []


//const game
//           id serv officiel                id serv test
let mort = /*"824726156141658132"       */"829832421825708064"
let jour = /*"825029496305614927"         */"829254726495240214"
let nuit = /*"824749359118811187"         */"829254687630557185"
let vivant = /*"824725851198849075"       */"829205364444364800"
let spec = /*"824726635902271518"         */"829250418244321280"
let devid = "830253971637665832"
let quiVeutJouer = /*"824725623346954271" */"829873265194303498"
let jailed = /*"824761075387727912"       */"830240201111896135"
let jail = /*"824728100645896314"         */"830240173727547424"
let mafiaChat = /*"824731087863021588"    */"830240221584687104"
let panchanid = /*"824727128758943795"    */"829269425290215463"
let dmchanid = /*"824726760808513606"     */"829216633205424128"
let spyHideout = /*"824762348396216401"   */"830240252248850433"
let turtleId = /*"830113799763525642"     */"830121244208267334"
let eyesId = /*"830114000448258058"       */"830121185885945880"
let godId = /*"824725152692174879"        */"829228486660063262"
let graveyard = /*"825868136782757918"    */"835014782594711593"    
let parentwhisp = /*"824726713605947403"  */"829239671925637150"
let parentInterface=/*"832301102236958770"*/"829239671925637150"
let adminchat = /*"829870229470838814"    */"833229701190385676"
let listeroleid = /*"824731870628413480"  */"833229701190385676"
let numJour = 0
let numNuit = 0
var nbWhispJour = 1

let rolesEtAlig = ["Investigateur", "Lookout", "Sherif", "Spy", "Agent", "Jailor", "Vampire-hunter", "Veteran", "Vigilante", "Bodyguard", "Doctor", "Escorte"
, "Maire", "Medium", "Retributionist", "Transporter", "Disguiser", "Forger", "Framer", "Hypnotiseur", "Consierge", "Ambusher", "Godfather", "Mafioso", "Blackmailer"
, "Conseiller", "Consort", "Amnesiac", "Survivant", "Vampire", "Bourreau", "Jester", "Sorcière", "Arsonist", "Serial-killer", "Loup-garou", "ti" ,"tp", "ts", "tk", "md", "ms", "mk"
, "nb", "nk", "ne", "nc", "rt", "rm", "rn", "any"]
let roles = ["investigateur", "lookout", "sherif", "spy", "agent", "jailor", "vampirehunter", "veteran", "vigilante", "bodyguard", "doctor", "escorte"
, "maire", "medium", "retributionist", "transporter", "disguiser", "forger", "framer", "hypnotiseur", "consierge", "ambusher", "godfather", "mafioso", "blackmailer"
, "conseiller", "consort", "amnesiac", "survivant", "vampire", "bourreau", "jester", "sorcière", "arsonist", "serialkiller", "loupgarou"]

let classique15 = ["Jailor", "Town investigative", "Town investigative", "Town protective", "Town killing", "Town support", "Random town", "Random town", "Godfather", "Mafioso", 
"Random mafia", "Random mafia", "Neutral evil", "Neutral killing", "Any"]

let Allanyballenced15 = ["Random town", "Random town", "Random town", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any"]

let classique20 = ["Jailor", "Doctor", "Investigateur", "Town investigative", "Town investigative", "Town support", "Town killing", "Random town", "Random town", "Random town",
"Vampire-hunter", "Godfather", "Mafioso", "Random mafia", "Random mafia", "Vampire", "Neutral killing", "Neutral evil", "Any", "Any"]

let listeGm = [{name : "classique15", list : classique15}, {name : "allanyballanced15", list : Allanyballenced15}, {name : "classique20", list : classique20}]


let color = "#f0b71a";
let prefix = "!";
var tagged = null
var author = null  
let messageJouer = new Discord.MessageEmbed()
.setDescription("Hey! Nouvelle game! Réagissez avec une tortue 🐢 si vous voulez jouer et avec des yeux 👀 si vous voulez spectate.")
.setColor(color)
const partie = new Partie()

let alive = function (){
  let alive = new Array()
  listejoueur.forEach(player => {
    if (player.serverRoles.includes(vivant)){
      alive.push(player);
    }
  })
  return alive
}

bot.on('ready', () => {
    console.log("bot online")
    bot.user.setActivity("Town Of Salem");
})

bot.on("message", (message) => {
  if(message.author.bot) return;
  let jailChan = message.guild.channels.cache.get(jail);
  let jailedChan = message.guild.channels.cache.get(jailed);
  let spyChan = message.guild.channels.cache.get(spyHideout);
  let mafiaChan = message.guild.channels.cache.get(mafiaChat);
  let graveyardChan = message.guild.channels.cache.get(graveyard);
  let adminchannel = message.guild.channels.cache.get(adminchat)
  let listerolechan = message.guild.channels.cache.get(listeroleid)
  let dev = message.member.roles.cache.has(devid);
  let god = message.member.roles.cache.has(godId);
  let dmChan = message.guild.channels.cache.get(dmchanid);
  let pendChan = message.guild.channels.cache.get(panchanid);
  
  if (message.channel == mafiaChan){
    spyChan.send(message.content)
  }
  if (message.channel == jailChan){
    jailedChan.send(message.content)
  }
  if (message.channel == jailedChan){
    jailChan.send(message.content)
  }
  if(!message.content.startsWith(prefix)) return;

  let MessageArray = message.content.split(" ");
  let cmd = MessageArray[0].slice(prefix.length);
  let args = MessageArray.slice(1);

  try{
    listejoueur.forEach(player => {
      if (message.mentions.members.first().user.username == player.name){
        tagged = player
      }
    })
  }
  catch(err){tagged = null}

  listejoueur.forEach(player => {
    if (message.author.username == player.name){
      author = player
    }
  })
  var taggedUser = message.mentions.members.first();
 

 
  let pasGod = new Discord.MessageEmbed()
    .setDescription("Tu n'est pas " + `<@&${godId}>` )
    .setColor(color);

  let qui = new Discord.MessageEmbed()
    .setDescription("Qui?")
    .setColor(color);

  let pascomme = new Discord.MessageEmbed()
  .setDescription("La partie n'est pas encore commencée!")
  .setColor(color)

  let trouvePas = new Discord.MessageEmbed()
  .setDescription("Je ne trouve pas ce joueur")
  .setColor(color);

  let pastoi = new Discord.MessageEmbed()
  .setDescription("Tu ne peut pas te whispe toi même")
  .setColor(color);

  if(cmd == "end") {
    if(!god && !dev) return message.channel.send(pasGod)
    for(let i = 0; i < listejoueur.length; i++)
    {
      listejoueur[i].user.roles.remove(vivant)
      listejoueur[i].user.roles.remove(mort)
      listejoueur[i].user.roles.remove(spec)
      listejoueur[i].user.roles.remove(jour)
      listejoueur[i].user.roles.remove(nuit)
      listejoueur[i].scroll = null
      listejoueur[i] = new Player(listejoueur[i].user)
      if (!listejoueur[i].serverRoles.includes(godId)){
        listejoueur[i].serverRoles = []
      }
      else{
        listejoueur[i].serverRoles = [godId]
      }
    }
    mafiaChan.overwritePermissions([
      {
        id: jour,
        deny: ['VIEW_CHANNEL'],
      },{ 
        id: message.guild.id,
        deny: ['VIEW_CHANNEL'],
      },{
        id: vivant,
        deny: ['VIEW_CHANNEL'],
      },{
        id: spec,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
      },{
        id: mort,
        deny: ['VIEW_CHANNEL'],
      }
    ])
    jailChan.overwritePermissions([
      {
        id: message.guild.id,
        deny: ['VIEW_CHANNEL'],
      },{
        id: vivant,
        deny: ['VIEW_CHANNEL'],
      },{
        id: spec,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
      },{
        id: mort,
        deny: ['VIEW_CHANNEL'],
      }
    ])
    spyChan.overwritePermissions([
      {
        id: message.guild.id,
        deny: ['VIEW_CHANNEL'],
      },{
        id: vivant,
        deny: ['VIEW_CHANNEL'],
      },{
        id: spec,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
      },{
        id: mort,
        deny: ['VIEW_CHANNEL'],
      }
    ])

    whispersChannels.forEach(whisper => {
      message.guild.channels.cache.get(whisper).delete();
    });
    whispersChannels = []

    interfaces.forEach(interface => {
      message.guild.channels.cache.get(interface).delete();
    });
    interfaces = []

    let gameend = new Discord.MessageEmbed()
    .setDescription("La partie est terminée!")
    .setColor(color)

    numJour = 0
    numNuit = 0
    nbrJoueurMax = 0
    partie.isStarted = false
    partie.gamemode = null
    partie.listeroles = []
    message.channel.send(gameend)

  }

  else if(cmd == "lastwill") {
    if(partie.isStarted == false) return message.channel.send(pascomme)
    var messageLW = "" 
    if(args.length >= 1 && taggedUser == null) {
      args.forEach(mot => {
      messageLW += mot + " "
    });
    author.lastwill = messageLW
    message.react("👍")

    }else if(author.lastwill == null || "") {
  
      let pasLW = new Discord.MessageEmbed()
      .setDescription("Tu n'as pas encore de last will")
      .setColor(color)
  
      message.channel.send(pasLW)
    }else if(taggedUser == null){
  
      let LW = new Discord.MessageEmbed()
      .setDescription(author.lastwill)
      .setColor(color)
  
      message.channel.send(LW)
    }else if(taggedUser != null) {

      let LWtagged = new Discord.MessageEmbed()
      .setDescription(tagged.lastwill)
      .setColor(color)

      message.channel.send(LWtagged)
    }else if(taggedUser != null && (!god || !dev) ){
      message.channel.send(pasGod)
    }
  }

  else if(cmd == "kill") {

    let graveyardmot = new Discord.MessageEmbed()
    .setDescription("Le lastwill de " + tagged.name + " était: " + tagged.lastwill)
    .addField("Son rôle était: ", tagged.role.name)
    .setColor(color)

    let pasLW = new Discord.MessageEmbed()
    .setDescription(tagged.name + " n'a pas de lastwill")
    .addField("Son rôle était: " , tagged.role.name)
    .setColor(color)

    if(!god && !dev) return message.channel.send(pasGod)
    if(partie.isStarted == false) return message.channel.send(pascomme)
    if(!args[0]) return message.channel.send(qui)
    if(tagged.lastwill == null) return graveyardChan.send(pasLW)
    tagged.serverRoles = [mort]
    taggedUser.roles.add(mort)
    taggedUser.roles.remove(vivant)
    graveyardChan.send(graveyardmot)
  }

  else if(cmd == "mvp") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(qui)
    tagged.mvp ++
    message.channel.send(new Discord.MessageEmbed()
    .setDescription(tagged.name + " est le MVP de la game!")
    .setColor(color))
  }

  else if(cmd == "scroll") {

    if(author.scroll != null) {
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Tu as déja utiliser ton scroll")
      .setColor(color))
    }

    if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Quel rôle que tu voudrais jouer?")
    .setColor(color))

    if(roles.includes(args[0]))
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Je ne trouve pas ce rôle")
      .setColor(color))

    if(author.mvp == 0){
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Tu n'as pas été MVP!")
      .setColor(color))
    }else if(author.inac >= 1) {
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Tu as été inactif dans les 2 dernières game!")
      .setColor(color))
    }else{
      author.scroll == args[0]
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Parfait, ton scroll à été utilisé! Tu as plus de chance d'être " + args[0])
      .setColor(color))
      author.mvp --
    }
  }
  
  else if(cmd == "jail") {
    if(partie.isStarted == false) return message.channel.send(pascomme)
    if(!args[0]) return message.channel.send(qui)
    if(!taggedUser) return message.channel.send(trouvePas);
    if(message.mentions.members.first().id == message.author.id) return message.channel.send(pastoi);

    if(author.interface == message.channel.id) {
      if(author.role.name == "Jailor" || god || dev) {
        let interfachan = message.guild.channels.cache.get(author.interface)
        jailedChan.updateOverwrite(
        tagged.id,
        {"VIEW_CHANNEL": true})
  
        mafiaChan.updateOverwrite(
        tagged.id,
        {"VIEW_CHANNEL": false})
  
        spyChan.updateOverwrite(
        tagged.id,
        {"VIEW_CHANNEL": false})
        
        interfachan.send("Vous avez emprisonner avec succès " + tagged.name)
        jailedChan.send("Vous êtes en prison, défendez vous pour éviter que le jailor vous exécute! ⛓️")
      }else{
        message.channel.send(new Discord.MessageEmbed()
        .setDescription("Tu n'est pas le jailor!")
        .setColor(color))
      }
    }else{
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Tu ne peut pas faire cette commande ici")
      .setColor(color))
    }
  }

  else if(cmd == "info") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(qui)
    message.channel.send(new Discord.MessageEmbed()
      .addField("Name, Role, Whisp restant, Vote For", tagged.name + " " + tagged.role.name + " " + tagged.whispRemaining + " " + tagged.votesFor)
      .setColor(color))
  }

  else if (cmd == "alive") {
    if(!god && !dev) return message.channel.send(pasGod);
    if(!args[0]) return message.channel.send(qui)
    taggedUser.roles.add(vivant)
  }

  else if(cmd == "add") {
    if(!god && !dev) return message.channel.send(pasGod);
    if(!args[0]) return message.channel.send(qui);
    let newPlayer = new Player(taggedUser)
    listejoueur.push(newPlayer);
  }

  else if(cmd == "swhisp") {

    let combien = new Discord.MessageEmbed()
      .setDescription("Combien de message?")
      .setColor(color);

      let wpj = new Discord.MessageEmbed()
        .setDescription("Le nombre de whisp par jour est maintenant de " + args[0])
        .setColor(color);

      if(!god && !dev) return message.channel.send(pasGod);
      if(!args[0]) return message.channel.send(combien);
      nbWhispJour = args[0];
      message.channel.send(wpj);
  }

  else if(cmd == "jour") {
    if(!god && !dev) return message.channel.send(pasGod);
    numJour = numJour + 1

    adminchannel.send(new Discord.MessageEmbed()
    .setDescription("Jour " + numJour)
    .setColor(color))

    pendChan.send(new Discord.MessageEmbed()
    .setDescription(Math.floor((alive().length / 2) + 1) + " votes sont nécéssaire pour pendre aujourd'hui.")
    .setColor(color))

    alive().forEach(player => {
      player.user.roles.add(jour)
      player.user.roles.remove(nuit)
      player.whispRemaining = nbWhispJour
      player.hasVoted = false

      jailedChan.updateOverwrite(
      player.id,
      {"VIEW_CHANNEL": false})

      if(player.role == "Mafia") {
        mafiaChan.updateOverwrite(
        player.id,
        {"VIEW_CHANNEL": true})

        }else if (player.role == "Spy") {
          spyChan.updateOverwrite(
          player.id,
          {"VIEW_CHANNEL": true})
        }
      }
    );
  }

  else if(cmd == "nuit") {
    if(!god && !dev) return message.channel.send(pasGod)
    numNuit = numNuit + 1
    
    adminchannel.send(new Discord.MessageEmbed()
    .setDescription("Nuit " + numNuit)
    .setColor(color))

    alive().forEach(player => {
      player.user.roles.remove(jour)
      player.user.roles.add(nuit)
      player.votesFor = 0
      player.whispRemaining = null
    });

    whispersChannels.forEach(whisper => {
      message.guild.channels.cache.get(whisper).delete();
    });
    whispersChannels = []
  }

  else if(cmd == "w") {

    let demWhisp = new Discord.MessageEmbed()
      .setDescription("#demande-de-whisper svp")
      .setColor(color);

    let pasVivant = new Discord.MessageEmbed()
      .setDescription("Ce joueur n'est pas vivant")
      .setColor(color);

    let maxwhisp = new Discord.MessageEmbed()
      .setDescription(`Il y a un maximum de ${nbWhispJour} whisp par jour`)
      .setColor(color);

    let nuitwhisp = new Discord.MessageEmbed()
      .setDescription("C'est la nuit! Regarde l'heure!")
      .setColor(color);
    
    if(partie.isStarted == false) return message.channel.send(pascomme)
    if(message.channel.name != dmChan.name) return message.channel.send(demWhisp);
    if(author.whispRemaining == null) return message.channel.send(nuitwhisp)
    if(!args[0]) return message.channel.send(qui);
    if(!taggedUser) return message.channel.send(trouvePas);
    if(message.mentions.members.first().id == message.author.id) return message.channel.send(pastoi);
    if(!taggedUser.roles.cache.has(vivant)) return message.channel.send(pasVivant);
    if(author.whispRemaining == 0) return message.channel.send(maxwhisp)

    let channelName = taggedUser.displayName + " et " + message.author.username;
    author.whispRemaining--;

    message.guild.channels.create(channelName,{type:"text",})
    .then((channel) => {
    channel.setParent(parentwhisp)
    channel.overwritePermissions([
    {
      id: channel.guild.id,
      deny: ['VIEW_CHANNEL'],
    },{
      id: vivant,
      deny: ['VIEW_CHANNEL'],
    },{
      id: author.id,
      allow: ['VIEW_CHANNEL'],
    },{
      id: tagged.id,
      allow: ['VIEW_CHANNEL'],
    },{
      id: spec,
      allow: ['VIEW_CHANNEL'],
      deny: ['SEND_MESSAGES'],
    },{
      id: mort,
      deny: ['VIEW_CHANNEL'],
    }
    ])
    whispersChannels.push(channel.id)                 
    }) 
  }

  else if(cmd == "p") {

    let pendrChan = new Discord.MessageEmbed()
      .setDescription("#vote-pour-pendre SVP")
      .setColor(color);

    let pasVivant = new Discord.MessageEmbed()
    .setDescription("Ce joueur n'est pas vivant")
    .setColor(color)
    if(partie.isStarted == false) return message.channel.send(pascomme)
    if(message.channel.name != pendChan.name) return message.channel.send(pendrChan);
    if(tagged == null) return message.channel.send(qui);
    if(!taggedUser.roles.cache.has(vivant)) return message.channel.send(pasVivant);
    if(!taggedUser) return message.channel.send(trouvePas);
    if(!author.hasVoted) {
      tagged.votesFor ++
      author.hasVoted = true
      author.registeredVote = tagged
      votelist.push(author.name)

      message.channel.send(new Discord.MessageEmbed()
      .setDescription(votelist.length)
      .setColor(color))
    }
    else {
      author.registeredVote.votesFor --
      tagged.votesFor ++
    }
    message.react("👍")
  }

  else if(cmd == "roles") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(alive().length != nbrJoueurMax) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Il n'y a pas encore assser de joueur inscrit!")
    .setColor(color))
    let roles = partie.listeroles
    roles.forEach(role => {
      listeroles.push(role.name)
    });
    console.log(partie.listeroles)
    alive().forEach(player => {
      let interfacechan =  message.guild.channels.cache.get(player.interface)
      interfacechan.send(new Discord.MessageEmbed()
      .setTitle("Ton rôle")
      .setDescription("Voici des infos sur ton rôle")
      .addField("Ton rôle", player.role.name)
      .addField("Allignement", player.role.alignement)
      .addField("Description", player.role.description)
      .addField("Habiletée", player.role.hab)
      .addField("Gagnez avec", player.role.winwith)
      .addField("Plus d'info sur ton wiki", player.role.wikiLink)
      .setColor(color))
      
      joueurroles.push(player.name + ", " + player.role.name)

      if(player.role.name == "Jailor") {
        jailChan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true}
        )
      }else if(player.role.name == "Agent infiltré") {
        spyChan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true}
        )
      }else if(player.role.alignement == "Mafia Killing" || "Mafia Support" || "Mafia Deception") {
        mafiaChan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true}
        )
      }
    });
      adminchannel.send(new Discord.MessageEmbed()
      .setTitle("Liste des joueurs avec leurs roles")
      .setDescription(joueurroles)
      .setColor(color))

      adminchannel.send(new Discord.MessageEmbed()
      .setTitle("Liste de rôle " + "(" + partie.gamemode.name + ")")
      .setDescription(listeroles)
      .setColor(color))

      listerolechan.send(new Discord.MessageEmbed()
      .setTitle("Partie en cour: " + partie.gamemode.name)
      .setDescription(partie.gamemode.list)
      .setColor(color))
  }

  else if(cmd == "results"){
    if(!god && !dev) return message.channel.send(pasGod)
    var targetedPlayer = [alive()[0]]
    alive().forEach(player => {
      if (player.id != targetedPlayer[0].id){
        if(targetedPlayer[0].votesFor < player.votesFor){
          targetedPlayer = [player]
        }
        else if (targetedPlayer[0].votesFor == player.votesFor) {
          targetedPlayer.push(player) 
        }
      }
    });  
    if(targetedPlayer.length > 1) {
      var desc = "Il y a une égalité entre "
      targetedPlayer.forEach(player => {
        if(player.id != targetedPlayer[0].id){
          desc += " et "
        }
        desc += player.name
      });
      desc += ". Aucun des deux ne sera pendu"
      return message.channel.send(new Discord.MessageEmbed()
      .setDescription(desc)
      .setColor(color))
    }
    else if (targetedPlayer.length == 1){
      if(targetedPlayer[0].votesFor > (alive().length/2)){
        return message.channel.send(new Discord.MessageEmbed()
      .setDescription("Le village a décidé de pendre " + targetedPlayer[0].name + " par un vote de " + targetedPlayer[0].votesFor + "-" + (alive().length - targetedPlayer[0].votesFor))
      .setColor(color))
      }
      else{
        return message.channel.send(new Discord.MessageEmbed()
      .setDescription("Le village a décidé d'épargner " + targetedPlayer[0].name + " par un vote de " + targetedPlayer[0].votesFor + "-" + (alive().length - targetedPlayer[0].votesFor))
      .setColor(color))
      }
    }
    else{
      return message.channel.send(new Discord.MessageEmbed()
      .setDescription("Il n'y a pas eu de vote aujourd'hui")
      .setColor(color))
    }
  }

  else if(cmd == "gamemode") {
    if(!god && !dev) return message.channel.send(pasGod)
    let found = false

    let mdjsvp = new Discord.MessageEmbed()
    .setTitle("Quel mode de jeux?")

    listeGm.forEach(gm => {
      let text = ""
      for (let i = 1; i <= gm.list.length; i++){
        text += i + ". " + gm.list[i-1] + "\n"
      }
      mdjsvp.addField(gm.name, text)
    });

    mdjsvp.setColor(color)

    if(!args[0]) return message.channel.send(mdjsvp)

    listeGm.forEach(gm => {
      if(args[0] == gm.name)
      {
        message.channel.send(new Discord.MessageEmbed()
        .setDescription("Mode de jeu " + gm.name + " choisi!")
        .setColor(color))
        partie.gamemode = gm
        nbrJoueurMax = gm.list.length
        found = true
      }
    });
    if(!found){
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Je ne trouve pas ce gamemode!")
      .setColor(color))
    }
  }

  else if(cmd == "nouvgm") {
    if(!god && !dev) return message.channel.send(pasGod)
    let good = true
    let nouvgmliste = []
    args.slice(1).forEach(arguments => {
      if(rolesEtAlig.includes(arguments)) {
        if(good = true) {
          if(arguments == "ti") {
            nouvgmliste.push("Town investigative")
          }else if(arguments == "tp") {
            nouvgmliste.push("Town protective")
          }else if(arguments == "ts") {
            nouvgmliste.push("Town support")
          }else if(arguments == "tk") {
            nouvgmliste.push("Town killing")
          }else if(arguments == "md") {
            nouvgmliste.push("Mafia deception")
          }else if(arguments == "ms") {
            nouvgmliste.push("Mafia support")
          }else if(arguments == "mk") {
            nouvgmliste.push("Mafia killing")
          }else if(arguments == "nb") {
            nouvgmliste.push("Neutral benin")
          }else if(arguments == "nk") {
            nouvgmliste.push("Neutral killing")
          }else if(arguments == "ne") {
            nouvgmliste.push("Neutral evil")
          }else if(arguments == "nc") {
            nouvgmliste.push("Neutral chaos")
          }else if(arguments == "rt") {
            nouvgmliste.push("Random town")
          }else if(arguments == "rm") {
            nouvgmliste.push("Random mafia")
          }else if(arguments == "rn") {
            nouvgmliste.push("Random neutral")
          }else if(arguments == "any") {
            nouvgmliste.push("Any")
          }else{
            nouvgmliste.push(arguments)
          }
        }
      }else{
        good = false
      }
    });
    if(nouvgmliste.length == args.length - 1) {
      nouvgmoffi = nouvgmliste
      partie.persoGm = nouvgmoffi
      partie.personom = args[0]
      message.channel.send(new Discord.MessageEmbed()
      .setTitle("Gamemode: " + args[0])
      .setDescription(nouvgmoffi)
      .addField("Nombre de joueurs", args.length - 1)
      .setColor(color))
      nomgamemode = args[0]
      listeGm.push({name : nomgamemode, list : nouvgmoffi})
    }else{
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Il y a un/des role(s) que je ne connais pas! !helpgm pour de l'aide")
      .setColor(color))
    }
  }

  /*else if(cmd == "delgm") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Quel gamemode?")
    .setColor(color))

    if(args[0] == nomgamemode) {
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Le mode de jeux " + nomgamemode + " à été supprimé!")
      .setColor(color))
      nomgamemode = null
      nouvgmoffi = []
    }else{
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Je ne trouve pas ce gamemode! Voici ce que tu peut supprimé: " + listeGm)
      .setColor(color))
    }
  }*/

  else if(cmd == "helpstart") {
    if(!god && !dev) return message.channel.send(pasGod)
    message.channel.send(new Discord.MessageEmbed()
    .setTitle("**Comment démarer une partie**")
    .setDescription(`Voici les commandes dans **l'ordre**:
    !gamemode [gamemode]
    !swhisp [nb de whisp]
    !start (nb de joueur) (message)
    !roles
    Si vous avez des questions, venez parler a Pageau ou Felix`)
    .addField("**Explications des commandes**", "=================================")
    .addField("!gamemode", `Cette commande est utile pour sélectionner un gamemode avant de débuter la partie. Si tu fait juste la commande, tu verras tous les gamemodes disponibles (en parenthèse).
    Tu as juste à faire ex: !gamemode class20`)
    .addField("!swhisp", "C'est tout simplement pour mettre une limite de whisp par jour. De base, la valeur est **1**.")
    .addField("!start", `La commande !start permet de démarer la partie. (Le mode de jeux doit être choisi avant) Le nombre de joueurs maximum se détermine avec le nombre de rôle qu'il y a dans le mode de jeux. (Même les modes perso)
    Par contre, ont peut l'overwrite en tappant un nombre comme premier "mot". Aussi, il est possible de personnalisé le message du début en inscrivant au moins 2 mots. Ex: !start J'aime Felix`)
    .addField("!roles", `**IMPORTANT!** Il ne faut pas faire cette commande avant que vous ayez reçu un mot dans le channel admin car sinon les rôles ne seront pas distribués. Les rôles sont automatiquement choisis à l'instant que le nombre de joueurs maximum est attein mais sont donnés seulement losque vous faites la commande !roles`)
    .setColor(color))
  }

  else if(cmd == "helpgm") {
    if(!god && !dev) return message.channel.send(pasGod)
    message.channel.send(new Discord.MessageEmbed()
    .setTitle("Aide pour créé un gamemode")
    .addField("**SVP** Écrire les rôles spécifique en **premier!** Sinon, c'est remplacé par un random town/mafia/neutral. Voici tout ce que tu peut écrire", rolesEtAlig)
    .setDescription(`ti: Town investigator
    tp: Town protective
    ts: Town support
    tk: Town killing
    md: Mafia deception
    ms: Mafia support
    mk: Mafia killing
    nb: Neutral benin
    nk: Neutral killing
    ne: Neutral evil
    nc: Neutral chaos
    rt: Random town
    rm: Random mafia
    rn: Random neutral`)
    .setColor(color))
  }

  else if(cmd == "help") {
    let helpgod = new Discord.MessageEmbed()
      .setTitle("Commandes Help")
      .addField("!helpstart", "Tout savoir comment start la game")
      .addField("!helpgame", "Pour avoir de l'aide sur le jeux")
      .addField("!helpgm", "Pour avoir de l'aide sur la création d'un gamemode")
      .addField("!helpcommands", "Pour avoir de l'aide sur les commandes")
      .setColor(color);

    let help = new Discord.MessageEmbed()
    .setTitle("Commandes Help")
    .addField("!helpgame", "Pour avoir de l'aide sur le jeux")
    .addField("!helpcommands", "Pour avoir de l'aide sur les commandes")
    .setColor(color);
    
    if(god || dev) {
      message.channel.send(helpgod);
    }else{
      message.channel.send(help)
    }



  }

  else if(cmd == "helpgame") {
    let helpgame = new Discord.MessageEmbed()
      .setTitle("Wiki du jeux")
      .addField("Town roles", "https://town-of-salem.fandom.com/wiki/Town")
      .addField("Mafia roles", "https://town-of-salem.fandom.com/wiki/Mafia")
      .addField("Neutral roles", "https://town-of-salem.fandom.com/wiki/Neutral")
      .setImage("https://static.wikia.nocookie.net/town-of-salem/images/7/7e/RoleIcon_Ambusher.png/revision/latest?cb=20200910205812")
      .setColor(color);

      message.channel.send(helpgame);
  }

  else if(cmd == "helpcommands") {
    let helpcommandsgod = new Discord.MessageEmbed()
      .setTitle("**Commandes God**")
      .addField("!add @[User]", "Pour ajouter un joueur à la liste de joueur")
      .addField("!swhisp [nbWhisp]", "Mettre la limite de whisp par jour")
      .addField("!gamemode [gamemode]", "Choisie le gamemode de la partie")
      .addField("!jour", "Permet de mettre le jour")
      .addField("!nuit", "Permet de mettre la nuit")
      .addField("!roles", "Donne les rôles a chaques joueurs")
      .addField("!clear [nbMessage]", "Supprime des messages")
      .addField("!info @[User]", "Pour avoir de l'info sur le joueur")
      .addField("!alive @[User]", "Pour mettre quelqu'un en vie")
      .addField("!result", "Pour avoir le résultat du vote")
      .addField("!start (Nb Joueurs)", "Pour commencer la game")
      .addField("!start (Nb Joueurs) (message)", "Tu peut aussi faire un message personnalisé!")
      .addField("!end", "Pour finir la game")
      .addField("!jail @[User]", "Pour mettre quelqu'un en prison")
      .addField("!nouvgm [Nom] [liste roles]", "Permet de créé un gamemode personnalisé")
      .addField("!delgm [gamemode]", "Pour supprimé un gamemode")
      .addField("!kill @[User]", "Pour tuer quelqu'un")
      .addField("!lastwill", "Écrit ton last will ici. Tu peux aussi voir ton last will comme ça: !lastwill")
      .addField("!lastwill [User]", "Pour voir le lastwill d'un joueur")
      .addField("!w @[User]", "Whisper quelqu'un")
      .addField("!p @[User]", "Pendre quelqu'un")
      .addField("!help", "Avoir de l'aide")
      .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1G9Fn3zO19KotriCvv-1KCyARlFWtHKmYcQ&usqp=CAU")
      .setColor(color);

    let helpcommandsvivant = new Discord.MessageEmbed()
      .setTitle("**Commandes Vivants**")
      .addField("!w @[User]", "Whisper quelqu'un")
      .addField("!p @[User]", "Pendre quelqu'un")
      .addField("!lastwill", "Écrit ton last will ici. Tu peut aussi voir ton last will comme ça: !lastwill")
      .addField("!jail @[User]", "Seulement le jailor peut faire cette commande")
      .addField("!help", "Pour avoir de l'aide")
      .addField("@Bilou", "Pour summon un être tout puissant qui viendra vous aider")
      .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUWvLwPHHKnsJvCvA2WUg5A5adoYpBQx9Pg&usqp=CAU")
      .setColor(color);

    if(god || dev) {
      message.channel.send(helpcommandsgod);
    }else{
      message.channel.send(helpcommandsvivant); 
    }
  }
});

bot.on('message', async (message) => {

  var god = message.member.roles.cache.has(godId);
  var dev = message.member.roles.cache.has(devid);
  var pasGod = new Discord.MessageEmbed()
  .setDescription("Tu n'est pas " + `<@&${godId}>` )
  .setColor(color);
  var color = "#f0b71a";
  let qvjChan = message.guild.channels.cache.get(quiVeutJouer);
  let adminchannel = message.guild.channels.cache.get(adminchat)
  let listerolechan = message.guild.channels.cache.get(listeroleid)
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  let MessageArray = message.content.split(" ");
  let cmd = MessageArray[0].slice(prefix.length);
  let args = MessageArray.slice(1);


  if(cmd == "start"){
    let class20 = ""
    let class15 = ""
    let any15 = ""
    let slineNum = 0

    for (let i = 1; i <= classique20.length; i++){
      class20 += i + ". " + classique20[i-1] + "\n"
    }
    for (let i = 1; i <= classique15.length; i++){
      class15 += i + ". " + classique15[i-1] + "\n"
    }
    for (let i = 1; i <= Allanyballenced15.length; i++){
      any15 += i + ". " + Allanyballenced15[i-1] + "\n"
    }

    let quelgm = new Discord.MessageEmbed()
    .setDescription("Quel gamemode? !gamemode")
    .setColor(color)
    if(partie.gamemode == null) return message.channel.send(quelgm)

    let messagestart = ""
    if(!god && !dev) return message.channel.send(pasGod)
    
    if(!(isNaN(args[0]))) {
      nbrJoueurMax = args[0]
      slineNum = 1
    }
    if(partie.gamemode == "Classique 20 joueurs") {
      listerolechan.send(new Discord.MessageEmbed()
      .setTitle("Partie en cour: Clasique 20 joueurs")
      .setDescription(class20)
      .setColor(color))
    }else if(partie.gamemode == "Classique 15 joueurs") {
      listerolechan.send(new Discord.MessageEmbed()
      .setTitle("Partie en cour: Classique 15 joueurs")
      .setDescription(class15)
      .setColor(color))
    }else if(partie.gamemode == "All Any balanced") {
      listerolechan.send(new Discord.MessageEmbed()
      .setTitle("Partie en cour: All any 15 joueurs")
      .setDescription(any15)
      .setColor(color))
    }

    if(args.length <= 1) {
      const reactionMessage = await qvjChan.send(messageJouer)
      await reactionMessage.react(turtleId)
      await reactionMessage.react(eyesId)

    }else if(args.length >= 2) {
        args.slice(slineNum).forEach(mots => {
        messagestart += mots + " "
      });

      const reactionMessage = await qvjChan.send(messagestart)
      await reactionMessage.react(turtleId)
      await reactionMessage.react(eyesId)
    }
  }

  else if(cmd == "clear") {
    if (!god && !dev) return message.channel.send(pasGod);
    if (!isNaN(message.content.split(' ')[1])) {
      let amount = 0;
      if (message.content.split(' ')[1] === '1' || message.content.split(' ')[1] === '0') {
        amount = 1;
      } else {
        amount = message.content.split(' ')[1];
        if (amount > 100) {
          amount = 100;
        }
      }
      await message.channel.bulkDelete(amount, true).then((_message) => {
        message.channel.send(`Le bot a supprimé \`${_message.size}\` messages :broom:`).then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 3000);
        });
      });
    } else {
      message.channel.send('Combien de message?').then((sent) => {
        setTimeout(function () {
          sent.delete();
        }, 3000);
      });
    }
  }
});

bot.on("messageReactionAdd", (reaction, user) => {
  if(user.bot) return;
  var reactor = null
  listejoueur.forEach(player => {
    if (user.username == player.name){
      reactor = player
    }
  })
  if(reaction.message.channel == quiVeutJouer) {
    if (reactor == null){
      reaction.message.channel.send(new Discord.MessageEmbed()
        .setDescription("Vous ne faites pas parti du serveur, veuillez contacter un admin")
        .setColor(color))
    }
    else{
    try{
      if(reaction.emoji.id == turtleId){
        if(!reactor.serverRoles.includes(vivant)) {
          if(alive().length < nbrJoueurMax) {
            
            reactor.user.roles.add(vivant)
            reactor.serverRoles.push(vivant)
            reactor.user.roles.remove(spec)

            let messainter = new Discord.MessageEmbed()
            .setDescription("Bonjour ceci est ton interface avec le jeu. Je m'explique. Ici tu auras la description de ton rôle, et tu pourras écrire tes" + 
            " actions que tu veux effectuer dans la nuit. De plus, tu pourras poser toutes tes questions par rapport au fonctionnement du jeu. Finalement, " + 
            "tu peux écrire ici un last will qui sera révélé à tout le monde lors de ta mort. Ce channel sera vidé chaque jour à l'exception de ce message, " +
            "de ta description de rôle, ainsi que de ton last will.")
            .setColor(color)

            let interface = reactor.user.displayName
            reaction.message.guild.channels.create(interface + " Interface",{type:"text",})
            .then((channel) => {
              channel.setParent(parentInterface)
              channel.overwritePermissions([
              {
                id: channel.guild.id,
                deny: ['VIEW_CHANNEL'],
              },
              {
                id: vivant,
                deny: ['VIEW_CHANNEL'],
              },{
                id: reactor.id,
                allow: ['VIEW_CHANNEL'],
              },{
                id: spec,
                allow: ['VIEW_CHANNEL'],
                deny: ['SEND_MESSAGES'],
              },{
                id: mort,
                deny: ['VIEW_CHANNEL'],
              }
              ]).then(channel.send(messainter))
              reactor.interface = channel.id
              interfaces.push(channel.id)
              })

            if(alive().length == nbrJoueurMax){
              Commands.prototype.start(partie, alive())
              partie.isStarted = true
            } 
          }
          else{
            reaction.message.channel.send(new Discord.MessageEmbed()
            .setDescription("La partie est déjà commencée, vous pouvez tout de même spectate avec des yeux")
            .setColor(color))
          }
        }
        else{
          reaction.message.channel.send(new Discord.MessageEmbed()
            .setDescription("Vous faites déjà partie de la partie!")
            .setColor(color))
        }
      } 
      if(reaction.emoji == eyesId){
        if(!reactor.serverRoles.includes(vivant)){
          reactor.user.roles.add(spec)
        }
        else{
          reaction.message.channel.send(new Discord.MessageEmbed()
            .setDescription("Vous ne pouvez pas spectate si vous faites déjà partie de la partie!")
            .setColor(color))
        }
      }
    }
    catch(err){console.log(err);}
  }
}
})

bot.login(process.env.BOT_TOKEN);