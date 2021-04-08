const Discord = require('discord.js')
const Player = require('./src/player.js')
require(dotenv).config();
const bot = new Discord.Client();
var listejoueur = [];
var nbWhispJour = 1;

bot.on('ready', () => {
    console.log("bot online")
    bot.user.setActivity("Thown Of Salem");
})

bot.on("message", (message) => {
  let prefix = "!";
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  let MessageArray = message.content.split(" ");
  let cmd = MessageArray[0].slice(prefix.length);
  let args = MessageArray.slice(1);
  let tagged = function() {
    listejoueur.forEach(player => {
      if (message.mentions.members.first().id == player.id){
        return player
      }
    })
  }
  let author = function() {
    listejoueur.forEach(player => {
      if (message.author.id == player.id){
        return player
      }
    })
  }
  let taggedUser = message.mentions.members.first();
  let color = "#f0b71a";
 

  //const game
  let mort = "829832421825708064";
  let jour = "829254726495240214";
  let nuit = "829254687630557185";
  let vivant = "829205364444364800";
  let spec = "829250418244321280";
  let god = message.member.roles.cache.has("829228486660063262");
  let dmChan = message.guild.channels.cache.get("829216633205424128");
  let pendChan = message.guild.channels.cache.get("829269425290215463");

  let alive = new Array()
  listejoueur.forEach(player => {
    if (player.user.roles.has(vivant)){
      alive.push(player);
    }
  })


  let pasGod = new Discord.MessageEmbed()
    .setDescription("Tu n'est pas " + `<@&${"829228486660063262"}>` )
    .setColor(color);

  let qui = new Discord.MessageEmbed()
    .setDescription("Qui?")
    .setColor(color);

  if(cmd == "infoPlayer") {
    new Discord.MessageEmbed()
      .setDescription(tagged)
      .setColor(color);
  }

  if(cmd == "role") {
    tagged.role = args[0]
  }

  if (cmd == "alive") {
    if(!god) return message.channel.send(pasGod);
    taggedUser.roles.add(vivant)
  }

  if(cmd == "add") {
    if(!god) return message.channel.send(pasGod);
    if(!args[0]) return message.channel.send(qui);
    let newPlayer = new Player(taggedUser)
    listejoueur.push(newPlayer);
    message.channel.send(listejoueur);
  }

  if(cmd == "swhisp") {

    let combien = new Discord.MessageEmbed()
      .setDescription("Combien de message?")
      .setColor(color);

      let wpj = new Discord.MessageEmbed()
        .setDescription("Le nombre de whisp par jour est maintenant de " + args[0])
        .setColor(color);

      if(!god) return message.channel.send(pasGod);
      if(!args[0]) return message.channel.send(combien);
      nbWhispJour = args[0];
      message.channel.send(wpj);
    }

  if(cmd == "jour") {
      if(!god) return message.channel.send(pasGod);
      alive.forEach(player => {
          player.user.roles.add(jour)
          player.user.roles.remove(nuit)
          player.whispRemaining = nbWhispJour
          player.hasVoted = false
          console.log("Jour");
      });
    }

  if(cmd == "nuit") {
    if(!god) return message.channel.send(pasGod)
    alive.forEach(player => {
        player.user.roles.remove(jour)
        player.user.roles.add(nuit)
        player.votesFor = 0
        console.log("Nuit");
    });
  }

  if(cmd == "w") {

    let demWhisp = new Discord.MessageEmbed()
      .setDescription("#Demande-De-Whisp svp")
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
    if(message.mentions.members.first().id === message.author.id) return message.channel.send(pastoi);
    if(!args[0]) return message.channel.send(qui);
    if(!taggedUser) return message.channel.send(trouvePas);
    if(!taggedUser.roles.cache.has("829205364444364800")) return message.channel.send(pasVivant);
    let channelName = taggedUser.displayName + " et " + message.author.username;
    if(author.whispRemaining == 0) return message.channel.send(maxwhisp)

    author.whispRemaining--;

    message.guild.channels.create(channelName,{type:"text",})
    .then((channel) => {
    channel.setParent("829239671925637150")
    channel.overwritePermissions([
    {
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
    }) 
  }

  if(cmd == "p") {

    let pendrChan = new Discord.MessageEmbed()
      .setDescription("#Vote-Pour-Pendre SVP")
      .setColor(color);

      if(message.channel.name != pendChan.name) return message.channel.send(pendrChan);
      if(!args[0]) return message.channel.send(qui);
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

  if(cmd == "results"){

    if(!god) return message.channel.send(pasGod)
    var targetedPlayer = [alive[0]]
    alive.forEach(player => {
      if (player.id != targetedPlayer.id){
        if(targetedPlayer.votesFor < player.votesFor){
          targetedPlayer = [player]
        }
        else if (targetedPlayer.votesFor == player.votesFor) {
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
      if(targetedPlayer.votesFor > alive.length/2){
        return message.channel.send(new Discord.MessageEmbed()
      .setDescription("Le village a décidé de pendre " + targetedPlayer[0].name + " par un vote de " + targetedPlayer[0].votesFor + "-" + (alive.length - targetedPlayer[0].votesFor))
      .setColor(color))
      }
      else{
        return message.channel.send(new Discord.MessageEmbed()
      .setDescription("Le village a décidé d'épargner' " + targetedPlayer[0].name + " par un vote de " + targetedPlayer[0].votesFor + "-" + (alive.length - targetedPlayer[0].votesFor))
      .setColor(color))
      }
    }
    else{
      return message.channel.send(new Discord.MessageEmbed()
      .setDescription("Il n'y a pas eu de vote aujourd'hui")
      .setColor(color))
    }
  }

  if(cmd == "help") {
    let help = new Discord.MessageEmbed()
      .setTitle("Commandes Help")
      .addField("!helpgame", "Pour avoir de l'aide sur le jeux")
      .addField("!helpcommands", "Pour avoir de l'aide sur les commandes")
      .setColor(color);
        
      message.channel.send(help);
  }

  if(cmd == "helpgame") {
    let helpgame = new Discord.MessageEmbed()
      .setTitle("Wiki du jeux")
      .addField("Town roles", "https://town-of-salem.fandom.com/wiki/Town")
      .addField("Mafia roles", "https://town-of-salem.fandom.com/wiki/Mafia")
      .addField("Neutral roles", "https://town-of-salem.fandom.com/wiki/Neutral")
      .setImage("https://static.wikia.nocookie.net/town-of-salem/images/7/7e/RoleIcon_Ambusher.png/revision/latest?cb=20200910205812")
      .setColor(color);

      message.channel.send(helpgame);
  }

  if(cmd == "helpcommands") {
    let helpcommandsgod = new Discord.MessageEmbed()
      .setTitle("Commandes God")
      .addField("!swhisp", "!swhisp [nombre de whisp max par jours]")
      .addField("!jour", "Permet de mettre le jour")
      .addField("!nuit", "Permet de mettre la nuit")
      .addField("!w", "!w @[User] Whisper quelqu'un")
      .addField("!pendre", "!pendre @[User] Pendre quelqu'un")
      .addField("!clear", "!clear [Nombre de message a clear]")
      .addField("!help", "!help Avoir de l'aide")
      .addField("@Bilou9#5756", "Pour summon un être tout puissant qui viendra vous aider")
      .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1G9Fn3zO19KotriCvv-1KCyARlFWtHKmYcQ&usqp=CAU")
      .setColor(color);

    let helpcommandsvivant = new Discord.MessageEmbed()
      .setTitle("Commandes Vivants")
      .addField("!w", "!w @[User] Whisper quelqu'un")
      .addField("!pendre", "!pendre @[User] Pendre quelqu'un")
      .addField("!help", "!help Avoir de l'aide")
      .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUWvLwPHHKnsJvCvA2WUg5A5adoYpBQx9Pg&usqp=CAU")
      .setColor(color);

    if(god) {

      message.channel.send(helpcommandsgod);

    }else{

      message.channel.send(helpcommandsvivant); 

    }
  }
});

bot.on('message', async (message) => {

  var god = message.member.roles.cache.has("829228486660063262");
  var pasGod = new Discord.MessageEmbed()
  .setDescription("Tu n'est pas " + `<@&${"829228486660063262"}>` )
  .setColor(color);
  var color = "#f0b71a";

  if (message.content.toLowerCase().startsWith("!" + 'clear')) {
    if (!god)
      return message.channel.send(pasGod);
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
          }, 2500);
        });
      });
    } else {
      message.channel.send('Combien de message?').then((sent) => {
        setTimeout(function () {
          sent.delete();
        }, 2500);
      });
    }
  }
});

process.env.DISCORD_TOKEN