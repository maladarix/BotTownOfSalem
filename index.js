const Discord = require('discord.js')
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
  let tagged = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let color = "#f0b71a";

  //const game
  let author = message.author.id;
  let jour = "829254726495240214";
  let nuit = "829254687630557185";
  let vivant = "829205364444364800";
  let spec = "829250418244321280";
  let god = message.member.roles.cache.has("829228486660063262");
  let dmChan = message.guild.channels.cache.get("829216633205424128");
  let pendChan = message.guild.channels.cache.get("829269425290215463");
  let whisp0 = "829422788385308712"
  let whisp1 = "829422855808483369"
  let whisp2 = "829422881142210601"
  let whisp3 = "829422907998208010"

  let pasGod = new Discord.MessageEmbed()
    .setDescription("Tu n'est pas " + `<@&${"829228486660063262"}>` )
    .setColor(color);

  let qui = new Discord.MessageEmbed()
    .setDescription("Qui?")
    .setColor(color);

  if(cmd == "add") {
    if(!god) return message.channel.send(pasGod);
    if(!args[0]) return message.channel.send(qui);
    listejoueur.push(tagged);
    message.channel.send(listejoueur);
    tagged.roles.add(vivant);
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

  if(cmd == "jour") {//offline people :(
      if(!god) return message.channel.send(pasGod);
      message.guild.members.cache.forEach(member => member.roles.add(jour));
      message.guild.members.cache.forEach(member => member.roles.remove(nuit))
      message.guild.members.cache.forEach(member => member.roles.add(whisp0));
      message.guild.members.cache.forEach(member => member.roles.remove(whisp3));
      message.guild.members.cache.forEach(member => member.roles.remove(whisp2));
      message.guild.members.cache.forEach(member => member.roles.remove(whisp1));
  }

  if(cmd == "nuit") {//offline people :(
    if(!god) return message.channel.send(pasGod)
      message.guild.members.cache.forEach(member => member.roles.add(nuit))
      message.guild.members.cache.forEach(member => member.roles.remove(jour))
  }

  if(cmd == "w") {//enlever les utilisations des whisp ex whisp-1

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
    if(!tagged) return message.channel.send(trouvePas);
    if(!tagged.roles.cache.has("829205364444364800")) return message.channel.send(pasVivant);
    let channelName = tagged.displayName + " et " + message.author.username;
    if(nbWhispJour == 3 && message.member.roles.cache.has(whisp3)) return message.channel.send(maxwhisp);
    if(nbWhispJour == 2 && message.member.roles.cache.has(whisp2)) return message.channel.send(maxwhisp);
    if(nbWhispJour == 1 && message.member.roles.cache.has(whisp1)) return message.channel.send(maxwhisp);

    if(message.member.roles.cache.has(whisp0)) {
      message.member.roles.remove(whisp0);
      message.member.roles.add(whisp1);
    }else if(message.member.roles.cache.has(whisp1)) {
      message.member.roles.remove(whisp1);
      message.member.roles.add(whisp2);
    }else if(message.member.roles.cache.has(whisp2)) {
      message.member.roles.remove(whisp2);
      message.member.roles.add(whisp3);
    };

    message.guild.channels.create(channelName,{type:"text",})
    .then((channel) => {
    channel.setParent("829239671925637150")
    channel.overwritePermissions([
    {
      id: vivant,
      deny: ['VIEW_CHANNEL'],
    },{
      id: author,
      allow: ['VIEW_CHANNEL'],
    },{
      id: tagged.id,
      allow: ['VIEW_CHANNEL'],
    },{
      id: spec,
      allow: ['VIEW_CHANNEL'],
      }])                  
    }) 
  }

  if(cmd == "p") {

    let pendrChan = new Discord.MessageEmbed()
      .setDescription("#Vote-Pour-Pendre SVP")
      .setColor(color);

      if(message.channel.name != pendChan.name) return message.channel.send(pendrChan);
      if(!args[0]) return message.channel.send(qui);
      message.react("👍")
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

bot.login("ODI5MjAxOTU4MTQ4NzY3Nzc0.YG0sgA.11DGgiYT0MiEpKqdsoP7dW53a5Y");