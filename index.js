const Discord = require('discord.js');
const Commands = require('./src/commands.js');
const Player = require('./src/player.js');
const Partie = require('./src/game.js')
require("dotenv").config()
const bot = new Discord.Client();
var nbrJoueurMax = 0;
var whispersChannels = []
var interfaces = []
var listejoueur = []
let listeroles = []
let joueurroles = []
let votelist = []

//test ODMxMDI2Nzg2MTAzNDU5ODUy.YHPQAQ.2LpCyBCzxHiVcHdmWlXECmo72I4
//offi ODI5MjAxOTU4MTQ4NzY3Nzc0.YG0sgA.-Z66p9uiZ2q2nKXhHlGRe1fZaoE

//const game
//                                             id serv officiel        id serv test
let mort = "824726156141658132"             //824726156141658132    829832421825708064
let jour = "825029496305614927"             //825029496305614927    829254726495240214
let nuit = "824749359118811187"             //824749359118811187    829254687630557185
let vivant = "824725851198849075"           //824725851198849075    829205364444364800
let spec = "824726635902271518"             //824726635902271518    829250418244321280
let devid = "830253971637665832"            //830253971637665832
let quiVeutJouer = "824725623346954271"     //824725623346954271    829873265194303498
let jailed = "824761075387727912"           //824761075387727912    830240201111896135
let jail = "824728100645896314"             //824728100645896314    830240173727547424
let mafiaChat = "824731087863021588"        //824731087863021588    830240221584687104
let panchanid = "824727128758943795"        //824727128758943795    829269425290215463
let dmchanid = "824726760808513606"         //824726760808513606    829216633205424128
let spyHideout = "824762348396216401"       //824762348396216401    830240252248850433
let turtleId = "830113799763525642"         //830113799763525642    830121244208267334
let eyesId = "830114000448258058"           //830114000448258058    830121185885945880
let godId = "824725152692174879"            //824725152692174879    829228486660063262
let graveyard = "825868136782757918"        //825868136782757918    835014782594711593    
let parentwhisp = "824726713605947403"      //824726713605947403    829239671925637150
let parentInterface = "832301102236958770"  //832301102236958770    829239671925637150
let adminchat = "829870229470838814"        //829870229470838814    833229701190385676
let listeroleid = "824731870628413480"      //824731870628413480    833229701190385676
let numJour = 0
let numNuit = 0
var nbWhispJour = 1

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

  if(cmd == "end") {
    if(!god && !dev) return message.channel.send(pasGod)
    for(let i = 0; i < listejoueur.length; i++)
    {
      listejoueur[i].user.roles.remove(vivant)
      listejoueur[i].user.roles.remove(mort)
      listejoueur[i].user.roles.remove(spec)
      listejoueur[i].user.roles.remove(jour)
      listejoueur[i].user.roles.remove(nuit)
      listejoueur[i] = new Player(listejoueur[i].user)
      numJour = 0
      numNuit = 0
      listejoueur[i].scroll = null
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

    message.channel.send(gameend)

  }

  else if(cmd == "lastwill") { 
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

    if(args[0] != "investigateur" || "lookout" || "sherif" || "spy" || "agent" || "jailor" || "vampirehunter" || "veteran" ||
      "vigilante" || "bodyguard" || "doctor" || "escorte" || "maire" || "medium" || "retributionist" || "transporter" || "disguiser" || 
      "forger" || "framer" || "hypnotiseur" || "consierge" || "ambusher" || "godfather" || "mafioso" || "blackmailer" ||
      "conseiller" || "consort" || "amnesiac" || "surviant" || "vampire" || "bourreau" || "jester" || "sorcière" || "arsonist" || "serialkiller" || "loupgarou")
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
    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(qui)
      jailedChan.updateOverwrite(
      tagged.id,
      {"VIEW_CHANNEL": true})

      mafiaChan.updateOverwrite(
      tagged.id,
      {"VIEW_CHANNEL": false})

      spyChan.updateOverwrite(
      tagged.id,
      {"VIEW_CHANNEL": false})

      jailedChan.send("Vous êtes en prison, défendez vous pour éviter que le jailor vous exécute! ⛓️")
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

    let trouvePas = new Discord.MessageEmbed()
      .setDescription("Je ne trouve pas ce joueur")
      .setColor(color);

    let pasVivant = new Discord.MessageEmbed()
      .setDescription("Ce joueur n'est pas vivant")
      .setColor(color);

    let pastoi = new Discord.MessageEmbed()
      .setDescription("Tu ne peut pas te whispe toi même")
      .setColor(color);

    let maxwhisp = new Discord.MessageEmbed()
      .setDescription(`Il y a un maximum de ${nbWhispJour} whisp par jour`)
      .setColor(color);

    let nuitwhisp = new Discord.MessageEmbed()
      .setDescription("C'est la nuit! Regarde l'heure!")
      .setColor(color);
    
    if(message.channel.name != dmChan.name) return message.channel.send(demWhisp);
    if(author.whispRemaining == null) return message.channel.send(nuitwhisp)
    if(!args[0]) return message.channel.send(qui);
    if(!taggedUser) return message.channel.send(trouvePas);
    if(message.mentions.members.first().id == message.author.id) return message.channel.send(pastoi);
    if(!taggedUser.roles.cache.has(vivant)) return message.channel.send(pasVivant);
    let channelName = taggedUser.displayName + " et " + message.author.username;
    if(author.whispRemaining == 0) return message.channel.send(maxwhisp)

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

      if(message.channel.name != pendChan.name) return message.channel.send(pendrChan);
      if(tagged == null) return message.channel.send(qui);
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
    (partie.listeroles).forEach(role => {
      listeroles.push(role.name)
    });
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
      .setTitle("Liste de rôle " + "(" + partie.gamemode + ")")
      .setDescription(listeroles)
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

    let mdjsvp = new Discord.MessageEmbed()
    .setTitle("Quel mode de jeux?")
    .addField("Partie classique à 20 joueurs (class20)", `1. Jailor
    2. Doctor
    3. Investigator
    4. Town investigative
    5. Town investigative
    6. Town Support
    7. Town killing
    8. Random town
    9. Random town
    10. Random town
    11. Vampire Hunter
    12. Godfather
    13. Mafioso
    14. Random Mafia
    15. Random mafia
    16. Vampire
    17. Neutral Evil
    18. Neutral Killing
    19. Any
    20. Any`)
    .addField("All Any balanced à 15 joueurs (any15)", `1. Random town
    2. Random town
    3. Random town
    4. Any
    5. Any
    6. Any
    7. Any
    8. Any
    9. Any
    10. Any
    11. Any
    12. Any
    13. Any
    14. Any
    15. Any`)
    .addField("Partie classique à 15 joueurs (class15)", `1. Jailor
    2. Town investigative
    3. Town investigative
    4. Town protective
    5. Town killing
    6. Town Support
    7. Random town
    8. Random town
    9. Neutral Killing
    10. Godfather
    11. Mafioso
    12. Random mafia
    13. Random mafia
    14. Neutral Evil
    15. Any`)
    .setColor(color)

    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(mdjsvp)

    if(args[0] == "class20") {

      let class20em = new Discord.MessageEmbed()
      .setDescription("Mode de jeu classique 20 joueurs choisi!")
      .setColor(color)
      message.channel.send(class20em)
      partie.gamemode = "Classique 20 joueurs"

    }else if(args[0] == "class15") {

      let class15em = new Discord.MessageEmbed()
      .setDescription("Mode de jeu classique 15 joueurs choisi!")
      .setColor(color)
      message.channel.send(class15em)
      partie.gamemode = "Classique 15 joueurs"

    }else if(args[0] == "any15") {

      let any15em = new Discord.MessageEmbed()
      .setDescription("Mode de jeu All Any balanced choisi!")
      .setColor(color)
      message.channel.send(any15em)
      partie.gamemode = "All Any balanced"
    }
  }

  else if(cmd == "help") {
    let help = new Discord.MessageEmbed()
      .setTitle("Commandes Help")
      .addField("!helpgame", "Pour avoir de l'aide sur le jeux")
      .addField("!helpcommands", "Pour avoir de l'aide sur les commandes")
      .setColor(color);
        
      message.channel.send(help);
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
      .addField("!start [Nb Joueurs]", "Pour commencer la game")
      .addField("!start [Nb Joueurs] [message]", "Tu peut aussi faire un message personnalisé!")
      .addField("!end", "Pour finir la game")
      .addField("!jail @[User]", "Pour mettre quelqu'un en prison")
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

    let quelgm = new Discord.MessageEmbed()
    .setDescription("Quel gamemode? !gamemode")
    .setColor(color)
    if(partie.gamemode == null) return message.channel.send(quelgm)

    let combien = new Discord.MessageEmbed()
    .setDescription("Combien de joueurs?")
    .setColor(color);

    nbrJoueurMax = args[0];
    let messagestart = ""
    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(combien)

    if(partie.gamemode == "Classique 20 joueurs") {
      listerolechan.send(new Discord.MessageEmbed()
      .setTitle("Partie en cour: Clasique 20 joueurs")
      .setDescription(
      `1. Jailor
      2. Doctor
      3. Investigator
      4. Town investigative
      5. Town investigative
      6. Town Support
      7. Town killing
      8. Random town
      9. Random town
      10. Random town
      11. Vampire Hunter
      12. Godfather
      13. Mafioso
      14. Random Mafia
      15. Random mafia
      16. Vampire
      17. Neutral Evil
      18. Neutral Killing
      19. Any
      20. Any`)
      .setColor(color))
    }else if(partie.gamemode == "Classique 15 joueurs") {
      listerolechan.send(new Discord.MessageEmbed()
      .setTitle("Partie en cour: Classique 15 joueurs")
      .setDescription(
      `1. Jailor
      2. Town investigative
      3. Town investigative
      4. Town protective
      5. Town killing
      6. Town Support
      7. Random town
      8. Random town
      9. Neutral Killing
      10. Godfather
      11. Mafioso
      12. Random mafia
      13. Random mafia
      14. Neutral Evil
      15. Any`)
      .setColor(color))
    }else if(partie.gamemode == "All Any balanced") {
      listerolechan.send(new Discord.MessageEmbed()
      .setTitle("Partie en cour: All any 15 joueurs")
      .setDescription(
      `1. Random town
      2. Random town
      3. Random town
      4. Any
      5. Any
      6. Any
      7. Any
      8. Any
      9. Any
      10. Any
      11. Any
      12. Any
      13. Any
      14. Any
      15. Any`)
      .setColor(color))
    }

    if(args.length == 1) {
      const reactionMessage = await qvjChan.send(messageJouer)
      await reactionMessage.react(turtleId)
      await reactionMessage.react(eyesId)

    }else if(args.length >= 2) {
        args.slice(1).forEach(mots => {
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
          if (alive().length != nbrJoueurMax) {
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

            if (alive().length == nbrJoueurMax){
              Commands.prototype.start(partie, alive())
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