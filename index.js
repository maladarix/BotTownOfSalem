const Discord = require('discord.js');
const Commands = require('./src/commands.js');
const Player = require('./src/player.js')
require("dotenv").config()
const bot = new Discord.Client();
var listejoueur = [];
var nbWhispJour = 1;
var nbrJoueurMax = 0;
var whispersChannels = [];
var interfaces = [];

  //const game
  let mort = "824726156141658132"
  let jour = "825029496305614927"
  let nuit = "824749359118811187"
  let vivant = "824725851198849075"
  let spec = "824726635902271518"
  let devid = "830253971637665832"
  let quiVeutJouer = "824725623346954271"
  let jailed = "824761075387727912"
  let jail = "824728100645896314"
  let mafiaChat = "824731087863021588"
  let spyHideout = "824762348396216401"
  let turtleId = "830113799763525642"
  let eyesId = "830114000448258058"
  let godId = "824725152692174879"
  let anyroles = ["Bodyguard", "Doctor", "Escort", "Maire", "Medium", "Retributionist", "Transporteur", "Investigateur", "Lookout", "Shérif", "Spy", "Vétéran", "Vigilante", "Conseiller",
   "Consort", "Blackmailer", "Janitor", "Disguiser", "Forger", "Framer", "Ambusher", "Hypnotist", "Armnesiac", "Survivor", "Executionner", "Jester", "Sorcière", "Serial Killer", "Arsonist"]
  let rolescourrant = ["Jailor", "Godfather", "Mafioso"]
  let graveyard = "825868136782757918"

  let color = "#f0b71a";
  let messageJouer = new Discord.MessageEmbed()
  .setDescription("Hey! Nouvelle game! Réagissez avec une tortue 🐢 si vous voulez jouer et avec des yeux 👀 si vous voulez spectate.")
  .setColor(color)
  let prefix = "!";
  var tagged = null
  var author = null  
  
  /*1. Jailor
2. Town investigative ///////
3. Town investigative ///////
4. Town protective    ///////
5. Town killing       ///////
6. Town Support       ///////
7. Random town        ///////
8. Random town        ///////
9. Neutral Killing    ///////
10. Godfather         ///////
11. Mafioso           ///////
12. Random mafia      ///////
13. Neutral Evil      ///////
14. Any
15. Any

unique: vétéran, Maire, retributionist, Ambusher
*/

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
 
  let dev = message.member.roles.cache.has(devid);
  let god = message.member.roles.cache.has(godId);
  let dmChan = message.guild.channels.cache.get("824726760808513606");
  let pendChan = message.guild.channels.cache.get("824727128758943795");
 
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
  else if(cmd == "role") {

    let quelrole = new Discord.MessageEmbed()
    .setDescription("Quel rôle?")
    .setColor(color)

    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(qui)
    if(!args[1]) return message.channel.send(quelrole)
    tagged.role = args[1]
    message.react("👍")
  }

  else if(cmd == "lastwill") { 
    var messageLW = "" 
    if(args.length >= 1) {
      args.forEach(mot => {
      messageLW += mot + " "
    });
    author.lastwill = messageLW
    message.react("👍")

    }else{
      if(author.lastwill == null || "") {
  
        let pasLW = new Discord.MessageEmbed()
        .setDescription("Tu n'as pas encore de last will")
        .setColor(color)
  
        message.channel.send(pasLW)
      }else{
  
        let LW = new Discord.MessageEmbed()
        .setDescription(author.lastwill)
        .setColor(color)
  
        message.channel.send(LW)
      }
    }
  }

  else if(cmd == "mafia") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(qui)
      tagged.role = "Mafia" 
      mafiaChan.updateOverwrite(
      tagged.id,
      {VIEW_CHANNEL: true}
    )
  }

  else if(cmd == "spy") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(qui)
      tagged.role = "Spy" 
      spyChan.updateOverwrite(
      tagged.id,
      {VIEW_CHANNEL: true}
    )
  }  

  else if(cmd == "jailor") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(qui)
      tagged.role = "Jailor" 
      jailChan.updateOverwrite(
      tagged.id,
      {VIEW_CHANNEL: true}
    )
  }

  else if(cmd == "kill") {

    let graveyardmot = new Discord.MessageEmbed()
    .setDescription("Le lastwill de " + tagged.name + " était: " + tagged.lastwill)
    //.addField("Son rôle était: " + tagged.role*/)
    .setColor(color)

    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(qui)
    tagged.serverRoles = [mort]
    taggedUser.roles.add(mort)
    taggedUser.roles.remove(vivant)
    message.channel.send(graveyardmot)
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
  }

  else if(cmd == "debug") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(qui)
    message.channel.send(new Discord.MessageEmbed()
      .addField("Name, Role, Whisp restant, Vote For", tagged.name + " " + tagged.role + " " + tagged.whispRemaining + " " + tagged.votesFor)
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
    alive().forEach(player => {
      player.user.roles.remove(jour)
      player.user.roles.add(nuit)
      player.votesFor = 0
      player.whispRemaining = 0
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
    

    if(message.channel.name != dmChan.name) return message.channel.send(demWhisp);
    if(!args[0]) return message.channel.send(qui);
    if(!taggedUser) return message.channel.send(trouvePas);
    if(message.mentions.members.first().id == message.author.id) return message.channel.send(pastoi);
    if(!taggedUser.roles.cache.has(vivant)) return message.channel.send(pasVivant);
    let channelName = taggedUser.displayName + " et " + message.author.username;
    if(author.whispRemaining == 0) return message.channel.send(maxwhisp)

    author.whispRemaining--;

    message.guild.channels.create(channelName,{type:"text",})
    .then((channel) => {
    channel.setParent("824726713605947403")
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
    console.log(whispersChannels)                 
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
      }
      else {
        author.registeredVote.votesFor --
        tagged.votesFor ++
      }
      message.react("👍")
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
      .addField("!jour", "Permet de mettre le jour")
      .addField("!nuit", "Permet de mettre la nuit")
      .addField("!clear [nbMessage]", "Supprime des messages")
      .addField("!debug @[User]", "Pour avoir de l'info sur le joueur")
      .addField("!alive @[User]", "Pour mettre quelqu'un en vie")
      .addField("!result", "Pour avoir le résultat du vote")
      .addField("!start", "Pour commencer la game")
      .addField("!end", "Pour finir la game")
      .addField("!role @[User] [role]", "Pour ajouter un rôle a un joueur")
      .addField("!jail @[User]", "Pour mettre quelqu'un en jail")
      .addField("!kill @[User]", "Pour tuer quelqu'un")
      .addField("!lastwill", "Écrit ton last will ici. Tu peux aussi voir ton last will comme ça: !lastwill")
      .addField("!w @[User]", "Whisper quelqu'un")
      .addField("!p @[User]", "Pendre quelqu'un")
      .addField("!help", "Avoir de l'aide")
      .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1G9Fn3zO19KotriCvv-1KCyARlFWtHKmYcQ&usqp=CAU")
      .setColor(color);

    let helpcommandsvivant = new Discord.MessageEmbed()
      .setTitle("**Commandes Vivants**")
      .addField("!w @[User]", "Whisper quelqu'un")
      .addField("!p @[User]", "Pendre quelqu'un")
      .addField("!help", "Pour avoir de l'aide")
      .addField("!lastwill", "Écrit ton last will ici. Tu peut aussi voir ton last will comme ça: !lastwill")
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
  var pasGod = new Discord.MessageEmbed()
  .setDescription("Tu n'est pas " + `<@&${godId}>` )
  .setColor(color);
  var color = "#f0b71a";
  let qvjChan = message.guild.channels.cache.get(quiVeutJouer);
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  let MessageArray = message.content.split(" ");
  let cmd = MessageArray[0].slice(prefix.length);
  let args = MessageArray.slice(1);


  if(cmd == "start"){

    let combien = new Discord.MessageEmbed()
    .setDescription("Combien de joueurs?")
    .setColor(color);

    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(combien)
      nbrJoueurMax = args[0];
      const reactionMessage = await qvjChan.send(messageJouer)
      await reactionMessage.react(turtleId)
      await reactionMessage.react(eyesId)
    }
  else if (cmd == "clear") {
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
              channel.setParent("824726713605947403")
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
              interfaces.push(channel.id)
            })

            if (alive().length == nbrJoueurMax){
                Commands.prototype.start()
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