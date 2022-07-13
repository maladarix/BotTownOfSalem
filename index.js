const Discord = require('discord.js');
const Commands = require('./src/commands.js');
const Player = require('./src/player.js');
const Partie = require('./src/game.js');
const commands = require('./src/commands.js');
const action = require('./src/action.js');
const bot = new Discord.Client();
require("dotenv").config()

var nbrJoueurMax = 0
let numjoueur = 0
let votemaire = 0
var nomgamemode = null
let start = false
let traitor = false
let am_pm = "PM"
let heureTxt = ""
let jailed = ""
var heurePendre = new Date()
let HeureResults = ""
let traitre = null
let killed = null
let nouvgmoffi = []
let resultsactions = []
var whispersChannels = []
let whispmaire = []
var interfaces = []
var listeTown = []
var listejoueur = []
let listeroles = []
let joueurroles = []
let username = []
let actions = []
let joueurCoven = []
let listeSpect = []

// serveur officiel
//let arrayId = ["824726156141658132","825029496305614927","824749359118811187","824725851198849075","824726635902271518","830253971637665832","824725623346954271","824761075387727912","824728100645896314","839977061384978492","839977410966847539","824731087863021588","850422940646506617","824727128758943795","824726760808513606","824727077366005800","824732131678617600","824762348396216401","830113799763525642", "830114000448258058" ,"824725152692174879" ,"825868136782757918","824726713605947403","832301102236958770","829870229470838814","824731870628413480"]

// serveur test
let arrayId = ["829832421825708064","829254726495240214","829254687630557185","829205364444364800","829250418244321280", null ,"829873265194303498","830240201111896135","830240173727547424","839977899581767700","830240221584687104","830240221584687104","849541121846935592","829269425290215463","829216633205424128","837575217907105813","837499365835669536","830240252248850433","830121244208267334","830121185885945880","829228486660063262","835014782594711593" ,"829239671925637150","829239671925637150","833229701190385676","833229701190385676"]

let mort = arrayId[0]           
let jour = arrayId[1]          
let nuit = arrayId[2]           
let vivant = arrayId[3]         
let spec = arrayId[4]           
let devid = arrayId[5]              
let quiVeutJouer = arrayId[6]   
let jailedid = arrayId[7]      
let jail = arrayId[8]          
let vampirechat = arrayId[9]    
let observatoire = arrayId[10]   
let mafiaChat = arrayId[11]     
let covenid = arrayId[12]     
let panchanid = arrayId[13]    
let dmchanid = arrayId[14]     
let villageid = arrayId[15]    
let gameannoncid = arrayId[16]  
let spyHideout = arrayId[17]  
let turtleId = arrayId[18]      
let eyesId = arrayId[19]       
let godId = arrayId[20]       
let graveyard = arrayId[21]       
let parentwhisp = arrayId[22]   
let parentInterface = arrayId[23] 
let adminchat = arrayId[24]   
let listeroleid = arrayId[25]   
let numJour = -1
let numNuit = 0
var nbWhispJour = 1
let commencer = false
let color = "#f0b71a";
let prefix = "!";
let resultsVotes = new Discord.MessageEmbed().setTitle("Compilation des votes").setColor(color)
let resultID = null

let rolesEtAlig = ["Investigateur", "Lookout", "Sheriff", "Spy", "Agent-Infiltre", "Jailor", "Vampire-Hunter", "Veteran", "Vigilante", "Bodyguard", "Docteur", "Escorte"
, "Maire", "Retributionist", "Transporteur", "Disguiser", "Forger", "Framer", "Hypnotiseur", "Consierge", "Ambusher", "Godfather", "Mafioso", "Blackmailer"
, "Conseiller", "Consort", "Amnesiac", "Survivant", "Vampire", "Executionner", "Jester", "Sorciere", "Arsonist", "Serial-Killer", "Loup-Garou", "Coven-Leader", "Hex-Master",
"Meduse", "Necromancien", "Poisoner", "Potion-Master", "Guardian-Angel", "Juggernaut", "Pirate", "Plaguebearer", "Crusader", "Psychic", "Tracker", "Trapper",
"ti" ,"tp", "ts", "tk", "md", "ms", "mk", "nb", "nk", "ne", "nc", "rt", "rm", "rn", "ce", "any"]

let roles = ["Investigateur", "Lookout", "Sherif", "Spy", "Agent-Infiltre", "Jailor", "Vampire-Hunter", "Veteran", "Vigilante", "Bodyguard", "Docteur", "Escorte"
, "Maire", "Retributionist", "Transporteur", "Disguiser", "Forger", "Framer", "Hypnotiseur", "Consierge", "Ambusher", "Godfather", "Mafioso", "Blackmailer"
, "Conseiller", "Consort", "Amnesiac", "Survivant", "Vampire", "Executionner", "Jester", "Sorciere", "Arsonist", "Serial-Killer", "Loup-Garou", "Coven-Leader", "Hex-Master",
"Meduse", "Necromancien", "Poisoner", "Potion-Master", "Guardian-Angel", "Juggernaut", "Pirate", "Plaguebearer", "Crusader", "Psychic", "Tracker", "Trapper"]

let rolesunique = ["Jailor", "Maire", "Retributionist", "Veteran", "Godfather", "Mafioso", "Ambusher", "Loup-Garou", "Coven-leader", "hex-master", "Meduse", "Necromancien", "Poisoner", 
"posion-master", "Juggernaut", "Pirate", "Plaguebearer"]

let classique15 = ["Jailor", "Town Investigative", "Town Investigative", "Town Protective", "Town Killing", "Town Support", "Random Town", "Random Town", "Godfather", "Mafioso", 
"Random Mafia", "Random Mafia", "Neutral Evil", "Neutral Killing", "Any"]

let Allanyballenced15 = ["Random Town", "Random Town", "Random Town", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any"]

let classique20 = ["Jailor", "Doctor", "Investigateur", "Town Investigative", "Town Investigative", "Town Support", "Town Killing", "Random Town", "Random Town", "Random Town",
"Vampire-Hunter", "Godfather", "Mafioso", "Random Mafia", "Random Mafia", "Vampire", "Neutral Killing", "Neutral Evil", "Any", "Any"]

let classique15Coven = ["Jailor", "Town Investigative", "Town Support", "Town Protective", "Town Killing", "Random Town", "Random Town", "Random Town", "Random Town",  "Coven-Leader",
"Coven Evil", "Coven Evil", "Neutral Killing", "Neutral Benin", "Any"]

let listeGm = [{name : "classique15", list : classique15, coven : false}, {name : "allanyballanced15", list : Allanyballenced15, coven : false}, {name : "classique20", list : classique20, coven : false}, {name : "classique15coven", list : classique15Coven, coven : true}]

var tagged = null
var author = null  
let messageJouer = "Hey! Nouvelle game! Réagissez avec une tortue 🐢 si vous voulez **jouer** et avec des yeux 👀 si vous voulez **spectate**."

const partie = new Partie()

let pascomme = new Discord.MessageEmbed()
.setDescription("La partie n'est pas encore commencée!")
.setColor(color)

let pasGod = new Discord.MessageEmbed()
.setDescription("Tu n'es pas " + `<@&${godId}>` )
.setColor(color)

let qui = new Discord.MessageEmbed()
.setDescription("Qui?")
.setColor(color)

let trouvePas = new Discord.MessageEmbed()
.setDescription("Je ne trouve pas ce joueur")
.setColor(color)

let pastoi = new Discord.MessageEmbed()
.setDescription("Tu ne peut pas te whispe toi même")
.setColor(color)

let pasVivant = new Discord.MessageEmbed()
.setDescription("Ce joueur n'est pas vivant")
.setColor(color)

let tpasvivant = new Discord.MessageEmbed()
.setDescription("Tu n'est pas vivant")
.setColor(color)

let nuitembed = new Discord.MessageEmbed()
.setDescription("C'est la nuit! Regarde l'heure!")
.setColor(color);

let commencee = new Discord.MessageEmbed()
.setDescription("La partie est déja commencée!")
.setColor(color);

var shuffle = function (array) {
  var m = array.length, t, i;
    
  // While there remain elements to shuffle…
  while (m) {
    
  // Pick a remaining element…
  i = Math.floor(Math.random() * m--);
       
  // And swap it with the current element.
  t = array[m];
  array[m] = array[i];
  array[i] = t;
  }
        
  return array;
}

let alive = function (){
  let alive = new Array()
  listejoueur.forEach(player => {
    if(player.serverRoles.includes(vivant)){
      alive.push(player)
    }
  })
  return alive
}

let clearJail = async function(jailedChan){
  for(i = 0; i<3; i++){
    await jailedChan.messages.fetch({limit: 100}).then(messages =>{
      jailedChan.bulkDelete(messages)
    })
  }
}

var kill = function(died) {
  let graveyardmot = new Discord.MessageEmbed()
  .setDescription(`Le lastwill de **${died.displayname}** était: 
  ${died.lastwillappear}`)
  .addField("Son rôle était: ", `**${died.roleappear}**`)
  .setColor(color)

  let pasLW = new Discord.MessageEmbed()
  .setDescription(`Nous n'avons pas pu trouver de lastwill.`)
  .addField(`Le rôle de **${died.displayname}** était:`, `${died.roleappear}`)
  .setColor(color)

  if(died.lastwillappear == null) {
    died.serverRoles = [mort]
    bot.channels.cache.get(graveyard).send(pasLW)   
  }else{
    died.serverRoles = [mort]
    bot.channels.cache.get(graveyard).send(graveyardmot)      
  }

  if(died.role.alignement == "Coven Evil") {
    for( var i = 0; i < joueurCoven.length; i++){
      if ( joueurCoven[i] === died) { 
        joueurCoven.splice(i, 1); 
      }
    }
  }

  died.necro = false
  died.user.roles.add(mort)
  died.user.roles.add(spec)
  died.user.roles.remove(vivant)
  died.user.roles.remove(nuit)
  died.user.roles.remove(jour)
}

var processVote = function() {
  var targetedPlayer = [alive()[0]]
  alive().forEach(player => {
        player.id,
        {VIEW_CHANNEL: true, SEND_MESSAGES: false}
    if (player.id != targetedPlayer[0].id){
      if(targetedPlayer[0].votesFor < player.votesFor){
        targetedPlayer = [player]
      }
      else if (targetedPlayer[0].votesFor == player.votesFor) {
        targetedPlayer.push(player) 
      }
    }
  });  
  if(targetedPlayer.length == alive().length) {
    return bot.channels.cache.get(panchanid).send(new Discord.MessageEmbed()
    .setDescription("Il n'y a pas eu de vote aujourd'hui")
    .setColor(color))
  }else if (targetedPlayer.length == 1){
    if(targetedPlayer[0].votesFor > (alive().length + votemaire) / 2){
      bot.channels.cache.get(panchanid).send(new Discord.MessageEmbed()
      .setDescription(`Le village a décidé de pendre **${targetedPlayer[0].displayname}** par un vote de **${targetedPlayer[0].votesFor}** - **${(alive().length - targetedPlayer[0].votesFor)}**.
      Il sera mort au début de la nuit.`)
      .setColor(color))
      killed = (targetedPlayer[0])
    }
    else{
      return bot.channels.cache.get(panchanid).send(new Discord.MessageEmbed()
    .setDescription(`Le village a décidé d'épargner **${targetedPlayer[0].displayname}** par un vote de **${targetedPlayer[0].votesFor}** - **${(alive().length - targetedPlayer[0].votesFor)}**`)
    .setColor(color))
    }
  }else{
    var desc = "Il y a une égalité entre "
    targetedPlayer.forEach(player => {
      if(player.id != targetedPlayer[0].id){
        desc += " et "
      }
      desc += player.displayname
    });
    desc += ". Aucun des deux ne sera pendu"
    return bot.channels.cache.get(panchanid).send(new Discord.MessageEmbed()
    .setDescription(desc)
    .setColor(color))
  }
}

setInterval( //!résults automatique
  () => {
    if(numJour == 0 || numJour == -1) return
    if(new Date().toUTCString().split(" ")[4] == HeureResults) {
      processVote()
    }
  }, 1000);

bot.on('ready', () => {
  console.log("bot online")
  console.log(new Date().toLocaleString())
  bot.user.setActivity("BING BONG", { type: "WATCHING" })
})

bot.on("message", (message) => {
  if(message.author.bot) return
  let jailChan = message.guild.channels.cache.get(jail)
  let jailedChan = message.guild.channels.cache.get(jailedid)
  let spyChan = message.guild.channels.cache.get(spyHideout)
  let vampirechan = message.guild.channels.cache.get(vampirechat)
  let observatoirechan = message.guild.channels.cache.get(observatoire)
  let mafiaChan = message.guild.channels.cache.get(mafiaChat)
  let covenchan = message.guild.channels.cache.get(covenid)
  let adminchannel = message.guild.channels.cache.get(adminchat)
  let villagechan = message.guild.channels.cache.get(villageid)
  let listerolechan = message.guild.channels.cache.get(listeroleid)
  let gameannoncchan = message.guild.channels.cache.get(gameannoncid)
  let dev = message.member.roles.cache.has(devid)
  let god = message.member.roles.cache.has(godId)
  let dmChan = message.guild.channels.cache.get(dmchanid)

  if(message.channel == mafiaChan){
    spyChan.send(message.content)
  }
  if(message.channel == jailChan){
    jailedChan.send(message.content)
  }
  if(message.channel == jailedChan){
    jailChan.send(message.content)
  }
  if(message.channel == vampirechan){
    observatoirechan.send(message.content)
  }

  if(message.content.toLowerCase().includes("charles")) message.channel.send("lowkey jtau pub")    

  if(!message.content.startsWith(prefix)) return

  let MessageArray = message.content.split(" ")
  let cmd = MessageArray[0].slice(prefix.length)
  let args = MessageArray.slice(1)

  try{
    listejoueur.forEach(player => {
      if(message.mentions.members.first().user.username == player.name){
        tagged = player
      }
    })
  }
  catch(err){tagged = null}

  listejoueur.forEach(player => {
    if(message.author.username == player.name){
      author = player
    }
  })
  var taggedUser = message.mentions.members.first()

  var processActions = function() {
    try {
      //priorité 1
      actions.forEach(element => {
        console.log(element)
        if(element.author.role.priority == 1) {
          if(element.target1.isjailed || element.target2.isjailed )
          {
            resultsactions.push({player : `${element.author.name}`, message : "Votre action a échoué! Votre cible était en prison."})
            //message.guild.channels.cache.get(element.author.interface).send("Votre action a échoué! Votre cible était en prison.")
          }
          else if(element.author.isjailed)
          {
            resultsactions.push({player : `${element.author.name}`, message : "Votre action a échoué! Vous étiez en prison."})
            //message.guild.channels.cache.get(element.author.interface).send("Votre action a échoué! Vous étiez en prison.")
          }
          else if(element.author.witch != null)
          {
            //Envoyer un message ici
          }
          else{
            switch(element.type){
              case "onalert" :
                if(element.author.actionsRemaining != 0) {
                  element.author.isAlert = true
                  element.author.actionsRemaining --
                  resultsactions.push({player : `${element.author.name}`, message : `Il vous reste ${element.author.actionsRemaining} alerte.`})
                }else{
                  resultsactions.push({player : `${element.author.name}` , message : `Votre action a échoué. Vous naviez plus d'alerte.`})
                }
                break;
              case "transport" :
                actions.forEach(el => {
                  if(el.author.role.priority > 1){
                    if(element.target1 == el.target1)
                      el.target1 = element.target2
                    else if (element.target2 == el.target1)
                      el.target1 = element.target1
                    if(element.target1 == el.target2)
                      el.target2 = element.target2
                    else if (element.target2 == el.target2)
                      el.target2 = element.target1
                  }
                });
                resultsactions.push({player : `${element.author.name}`, message : `Votre action a été effectuée avec succès!`})
                resultsactions.push({player : `${element.target1.name}`, message : `Vous avez été transporté vers un autre endroit.`})
                resultsactions.push({player : `${element.target2.name}`, message : `Vous avez été transporté vers un autre endroit.`})
                break;
              case "jestExecute" :
                //kill(element.target1)
                resultsactions.push({player : `${element.target1.name}`, message : `Vous avez été hanté par le Jester. Vous vous êtes suicidé de remords.`})
                break;
              case "ambush" :
                element.target1.ambushed = element.author
                resultsactions.push({player : `${element.author.name}`, message : `Votre action a été effectuée avec succès!`})
                break;
            }
          }
        }
      });  

      //Priorité 2 TODO : WITCH
      actions.forEach(element => {
        if(element.author.role.priority == 2)
        {
          if(element.target1.isjailed)
          {
            resultsactions.push({player : `${element.author.name}`, message : "Votre action a échoué! Votre cible était en prison."})
            //message.guild.channels.cache.get(element.author.interface).send("Votre action a échoué! Votre cible était en prison.")
          }
          else if(element.author.isjailed)
          {
            resultsactions.push({player : `${element.author.name}`, message : "Votre action a échoué! Vous étiez en prison."})
            //message.guild.channels.cache.get(element.author.interface).send("Votre action a échoué! Vous étiez en prison.")
          }
          else if(element.author.witch != null)
          {
            //message
          }
          else if (element.target1.role.name == "Veteran" && element.target1.role.isAlert) {
            let healed = false
            actions.forEach(heal => {
              if (heal.type == "heal" && heal.target1 == element.target1) {
                healed = true
              }
            })
            if(healed) {
              resultsactions.push({player : `${element.author.name}`, message : `Vous avez été attaqué par le vétéran que vous visitiez, mais quelqu’un vous a ramené à la vie.`})
              resultsactions.push({player : `${element.target1.name}`, message : `Vous avez tiré la personne qui vous a visité, mais il a été soigné par un docteur.`})
            }else {
              resultsactions.push({player : `${element.author.name}`, message : `Vous avez été tué par le Vétéran que vous avez visité.`})
              resultsactions.push({player : `${element.target1.name}`, message : `Vous avez tué quelqu’un qui vous a visité.`})
              //kill(element.author)
            }
          }else {
            if (element.target1.ambushed != null) {
              if(!element.target1.ambushDone) {
                let healed = false
                actions.forEach(heal => {
                  if (heal.type == "heal" && heal.target1 == element.target1){
                    healed = true
                  }
                })
                if(healed)
                {
                  //Envoyer un message ici
                }
                else
                {
                //kill(element.author)
                ambushDone = true
                }
              }
              //Envoyer un message ici
            }

            if(element.author.serverRoles.includes(vivant)) {
              element.target1.isroleblocked = true
              //Message de confirmation d'action
            }
            
          }
        }
      });

      //Priorité 3 TODO : Disguiser, Forger
      actions.forEach(element => {
        if(element.author.role.priority == 3)
        {
          if(element.target1.isjailed)
          {
            resultsactions.push({player : `${element.author.name}`, message : "Votre action a échoué! Votre cible était en prison."})
            //message.guild.channels.cache.get(element.author.interface).send("Votre action a échoué! Votre cible était en prison.")
          }
          else if(element.author.isjailed)
          {
            resultsactions.push({player : `${element.author.name}`, message : "Votre action a échoué! Vous étiez en prison."})
            //message.guild.channels.cache.get(element.author.interface).send("Votre action a échoué! Vous étiez en prison.")
          }
          else if(element.author.witch != null)
          {
            //Envoyer un message ici
          }
          else if(element.author.isroleblocked)
          {
            resultsactions.push({player : `${element.author.name}`, message : `Quelqu’un a occupé votre nuit. Vous avez été roleblocked.`})
          }
          else if (element.target1.role.name == "Veteran" && element.target1.role.isAlert) {
            //kill(element.author)
            //Envoyer un message ici
          }
          else{
            if (element.target1.ambushed != null) {
              if(!element.target1.ambushDone)
              {
                let healed = false
                actions.forEach(heal => {
                  if (heal.type == "heal" && heal.target1 == element.target1){
                    healed = true
                  }
                })
                if(healed)
                {
                  //Envoyer un message ici
                }
                else
                {
                kill(element.author)
                ambushDone = true
                }
              }
              //Envoyer un message ici
            }
            if(element.author.serverRoles.includes(vivant)) {
              switch(element.type){
                case "guard" :
                  element.target1.guarded = element.author
                  resultsactions.push({player : `${element.author.name}`, message : `Votre action a été effectuée avec succès!`})
                  break;
                case "heal" :
                  element.target1.healed = element.author
                  resultsactions.push({player : `${element.author.name}`, message : `Votre action a été effectuée avec succès!`})
                  break;
                case "disguise" :
                  //TODO
                  resultsactions.push({player : `${element.author.name}`, message : `Votre action a été effectuée avec succès!`})
                  break;
                case "rewrite" :
                  //TODO
                  resultsactions.push({player : `${element.author.name}`, message : `Votre action a été effectuée avec succès!`})
                  break;
                case "frame" :
                  target1.roleappear = author.role
                  resultsactions.push({player : `${element.author.name}`, message : `Votre action a été effectuée avec succès!`})
                  break;
                case "clean" :
                  target1.roleappear = null
                  target1.lastwill = null
                  resultsactions.push({player : `${element.author.name}`, message : `Votre action a été effectuée avec succès!`})
                  break;
                case "blackmail" :
                  resultsactions.push({player : `${element.author.name}`, message : `Votre action a été effectuée avec succès!`})
                  break;
                case "vest" :
                  resultsactions.push({player : `${element.author.name}`, message : `Votre action a été effectuée avec succès!`})
                  break;
                case "douse" :
                  element.target1.doused = true
                  resultsactions.push({player : `${element.author.name}`, message : `Votre action a été effectuée avec succès!`})
                  break;
              }
            }
          }
        }
      });

      //priorité 4
      actions.forEach(element => {
        if(element.author.role.priority == 4)
        {
          if(element.target1.isjailed)
          {
            message.guild.channels.cache.get(element.author.interface).send("Votre action a échoué! Votre cible était en prison.")
          }
          else if(element.author.isjailed)
          {
            message.guild.channels.cache.get(element.author.interface).send("Votre action a échoué! Vous étiez en prison.")
          }
          else if(element.author.witch != null)
          {
            //Envoyer un message ici
          }
          else if(element.author.isroleblocked)
          {
            //Envoyer un message ici
          }
          else if (element.target1.role.name == "Veteran" && element.target1.role.isAlert)
          {
            kill(element.author)
            //Envoyer un message ici
          }
          else{
            if (element.target1.ambushed != null)
            {
              if(!element.target1.ambushDone)
              {
                let healed = false
                actions.forEach(heal => {
                  if (heal.type == "heal" && heal.target1 == element.target1){
                    healed = true
                  }
                })
                if(healed)
                {
                  //Envoyer un message ici
                }
                else
                {
                kill(element.author)
                ambushDone = true
                }
              }
              //Envoyer un message ici
            }
            if(element.author.serverRoles.includes(vivant))
            {
              switch(element.type){
                case "invest" :
                  break;
                case "sheriff" :
                  break;
                case "investigate" :
                  break;
              }
            }
          }
        }
      });

      //priorité 5
      actions.forEach(element => {
        if(element.author.role.priority == 5 || element.type == "ignite")
        {
          if(element.target1.isjailed)
          {
            message.guild.channels.cache.get(element.author.interface).send("Votre action a échoué! Votre cible était en prison.")
          }
          else if(element.author.isjailed)
          {
            message.guild.channels.cache.get(element.author.interface).send("Votre action a échoué! Vous étiez en prison.")
          }
          else if(element.author.witch != null)
          {
            //Envoyer un message ici
          }
          else if(element.author.isroleblocked)
          {
            //Envoyer un message ici
          }
          else if (element.target1.role.name == "Veteran" && element.target1.role.isAlert)
          {
            kill(element.author)
            //Envoyer un message ici
          }
          else{
            if (element.target1.ambushed != null)
            {
              if(!element.target1.ambushDone)
              {
                let healed = false
                actions.forEach(heal => {
                  if (heal.type == "heal" && heal.target1 == element.target1){
                    healed = true
                  }
                })
                if(healed)
                {
                  //Envoyer un message ici
                }
                else
                {
                kill(element.author)
                ambushDone = true
                }
              }
              //Envoyer un message ici
            }
            if(element.author.serverRoles.includes(vivant))
            {
              switch(element.type){
                case "execute" :
                  break;
                case "huntvamp" :
                  break;
                case "vigkill" :
                  break;
                case "attack" :
                  break;
                case "convert" :
                  break;
                case "ignite" :
                  break;
                case "serialkill" :
                  break;
                case "maul" :
                  break;
              }
            }
          }
        }
      });

      //priorité 6
      actions.forEach(element => {
        if(element.author.role.priority == 6)
        {
          if(element.target1.isjailed)
          {
            message.guild.channels.cache.get(element.author.interface).send("Votre action a échoué! Votre cible était en prison.")
          }
          else if(element.author.isjailed)
          {
            message.guild.channels.cache.get(element.author.interface).send("Votre action a échoué! Vous étiez en prison.")
          }
          else if(element.author.witch != null)
          {
            //Envoyer un message ici
          }
          else if(element.author.isroleblocked)
          {
            //Envoyer un message ici
          }
          else if (element.target1.role.name == "Veteran" && element.target1.role.isAlert)
          {
            kill(element.author)
            //Envoyer un message ici
          }
          else{
            if (element.target1.ambushed != null)
            {
              if(!element.target1.ambushDone)
              {
                let healed = false
                actions.forEach(heal => {
                  if (heal.type == "heal" && heal.target1 == element.target1){
                    healed = true
                  }
                })
                if(healed)
                {
                  //Envoyer un message ici
                }
                else
                {
                kill(element.author)
                ambushDone = true
                }
              }
              //Envoyer un message ici
            }
            if(element.author.serverRoles.includes(vivant))
            {
              switch(element.type){
                case "lookout" :
                  break;
                case "bug" :
                  break;
                case "remember" :
                  break;
              }
            }
          }
        }
      });

      //reset des valeurs
      actions = []
      alive().forEach(player =>{
        if(player.witch != null)
        {
          //player.witch.interface.send()
          player.witch = null
        }
        player.roleappear = player.role
        player.lastwillappear = player.lastwill
        player.isroleblocked = false
        player.isjailed = false
        player.isAlert = false
        player.guarded = null
        player.healed = null
        player.trans = player
        player.ambushed = null
        player.ambushDone = false
      })
    } catch(err) {return}
  }

  if(cmd == "end") {
    if(!god && !dev) return message.channel.send(pasGod)
    for(let i = 0; i < listejoueur.length; i++)
    {
      listejoueur[i].user.roles.remove(vivant)
      listejoueur[i].user.roles.remove(mort)
      listejoueur[i].user.roles.remove(spec)
      listejoueur[i].user.roles.remove(jour)
      listejoueur[i].user.roles.remove(nuit)
      listejoueur[i].hasVoted = false
      listejoueur[i].role = null
      listejoueur[i].lastwill = null
      listejoueur[i].scroll = null
      listejoueur[i].registeredVote = null
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
    covenchan.overwritePermissions([
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

    nomgamemode = null
    jailed = ""
    nouvgmoffi = []
    whispersChannels = []
    interfaces = []
    killlist = []
    username = []
    jailedkill = ""
    rolesblocked = []
    actions = []
    numJour = 0
    numNuit = 0
    nbWhispJour = 1
    listeroles = []
    joueurroles = []
    nbrJoueurMax = 0
    start = false
    this.gamemode = null
    this.isStarted = false
    this.listeroles = []
    this.personom = ""
    this.persoGm = []
    this.time = "jour"
    this.fullmoon = false
    message.channel.send(gameend)

  }
  
  else if(cmd == "heurevote") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(start == true) return message.channel.send(commencee)
    if(!args[0]) return message.channel.send("Quelle heure?")
    let offset = 5
    if(new Date().getTimezoneOffset() == 240) {
      offset = 4
    }
    if(args[0].split("").length < 4 || 5 < args[0].split("").length) return message.channel.send(new Discord.MessageEmbed()
    .setDescription(`Mauvais format! ex: 20:45`)
    .setColor(color))

    if(args[0].split("").length == 4) {
      if(!isNaN(args[0].split("")[0]) && args[0].split("")[1] == ":" && !isNaN(args[0].split("")[2]) && !isNaN(args[0].split("")[3])) {
        let heure = args[0].split(":")[0]
        let minute = args[0].split(":")[1]
        if(heure > 23 || heure < 0) return message.channel.send("Entre 0 et 23H")
        if(minute > 59 || minute < 0) return message.channel.send("Entre 0 et 59MIN")
        heurePendre.setUTCHours(parseInt(heure) + offset, minute, 0, 0)
        HeureResults = heurePendre.toUTCString().split(" ")[4]
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Le vote passera automatiquement à **${args[0]}** AM`)
        .setColor(color))
        heureTxt = args[0]
      }else{
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Mauvais format! ex: 20:45`)
        .setColor(color))
      }
    }else if(args[0].split("").length == 5) {
      if(args[0].split(":")[0] < 12) {
        am_pm = "AM"
      }
      if(!isNaN(args[0].split("")[0]) && !isNaN(args[0].split("")[1]) && args[0].split("")[2] == ":" && !isNaN(args[0].split("")[3]) && !isNaN(args[0].split("")[4])) {
        let heure = args[0].split(":")[0]
        let minute = args[0].split(":")[1]
        if(heure > 23 || heure < 0) return message.channel.send("Entre 0 et 23H")
        if(minute > 59 || minute < 0) return message.channel.send("Entre 0 et 59MIN")
        heurePendre.setUTCHours(parseInt(heure) + offset, minute, 0, 0)
        HeureResults = heurePendre.toUTCString().split(" ")[4]
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Le vote passera automatiquement à **${args[0]}** ${am_pm}`)
        .setColor(color))
        heureTxt = args[0]
      }else{
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Mauvais format! ex: 20:45`)
        .setColor(color))
      }
    }
  }

  else if(cmd == "traitor") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(partie.isStarted == true) return message.channel.send(commencee)
    if(traitor == false) {
      traitor = true
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Mode **Traitor** activé!")
      .setColor(color))
    }else{
      traitor = false
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Mode **Traitor** désactivé!")
      .setColor(color))
    }
  }
  
  else if(cmd == "lastwill") {
    if(partie.isStarted == false) return message.channel.send(pascomme)
    if(!message.member.roles._roles.has(vivant)) return message.channel.send(tpasvivant)
    var messageLW = "" 
    if(args.length >= 1 && taggedUser == null) {
      args.forEach(mot => {
      messageLW += mot + " "
    });
    author.lastwill = messageLW
    author.lastwillappear = messageLW
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

      if(message.channel == jailedChan) {
        jailChan.send(LW)
      }else if(message.channel == jailChan) {
        jailedChan.send(LW)
      }
  
      message.channel.send(LW)
    }else if(taggedUser != null && !god) {
      message.channel.send(pasGod)

    }else if(taggedUser != null) {
      let LWtagged = new Discord.MessageEmbed()
      .setDescription(tagged.lastwill)
      .setColor(color)

      message.channel.send(LWtagged)
    }
  }

  else if(cmd == "note") {
    if(partie.isStarted == false) return message.channel.send(pascomme)
    if(!message.member.roles._roles.has(vivant)) return message.channel.send(tpasvivant)
    var messageNote = "" 
    if(args.length >= 1 && taggedUser == null) {
      args.forEach(mot => {
      messageNote += mot + " "
    });
    author.note = messageNote
    message.react("👍")

    }else if(author.note == null || "") {
  
      let pasNote = new Discord.MessageEmbed()
      .setDescription("Tu n'as pas encore de Note")
      .setColor(color)
  
      message.channel.send(pasNote)
    }else if(taggedUser == null){
  
      let note = new Discord.MessageEmbed()
      .setDescription(author.note)
      .setColor(color)
  
      message.channel.send(note)
    }else if(taggedUser != null && !god) {
      message.channel.send(pasGod)

    }else if(taggedUser != null) {
      let Notetagged = new Discord.MessageEmbed()
      .setDescription(tagged.note)
      .setColor(color)

      message.channel.send(Notetagged)
    }
  }

  else if(cmd == "role") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(!tagged) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Qui?")
    .setColor(color))
    if(!roles.includes(args[1])) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Je ne trouve pas ce rôle")
    .setColor(color))
    commands.prototype.getAllRoles().forEach(role => {
      if(role.name == args[1]){
        partie.listeroles.push(role)
        tagged.role = role
        tagged.roleappear = role.name
      }
    });
    message.react("👍")
  }

  else if(cmd == "forger") {
    if(partie.isStarted == false) return message.channel.send(pascomme)
    if(!god && !dev) return message.channel.send(pasGod)
    if(!taggedUser.roles.cache.has(vivant)) return message.channel.send(pasVivant)
    if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Quel rôle?")
    .setColor(color))
    if(!args[2]) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Lastwill?")
    .setColor(color))
    let forgerlw = []
    let good = false
    let joueurvisé = ""

    alive().forEach(joueur => {
      if(joueur.number == args[0]) {
      joueurvisé = joueur
      good = true
      }
    });

    if(good == false) return message.channel.send(qui)

    args.slice(2).forEach(mot => {
      forgerlw += mot + " "
    })
    joueurvisé.lastwillappear = forgerlw

    
    if(roles.includes(args[1])) {
      joueurvisé.roleappear = args[1]
    }else return message.channel.send(new Discord.MessageEmbed()
      .setDescription("Je ne trouve pas ca rôle")
      .setColor(color))
      


    message.channel.send(new Discord.MessageEmbed()
    .setTitle(`Info sur **${joueurvisé.displayname}**:`)
    .addField("Rôle", joueurvisé.roleappear)
    .addField("Lastwill", joueurvisé.lastwillappear)
    .setColor(color))
  }

  else if(cmd == "kill") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(partie.isStarted == false) return message.channel.send(pascomme)
    if(commencer == false) return message.channel.send(pascomme)
    if(!args[0]) return message.channel.send(qui)
    if(!taggedUser.roles.cache.has(vivant)) return message.channel.send(pasVivant)
    if(!args[1]) return kill(tagged)
    if(args[1] == "stoned" || "cleaned" || "bloody") {
      if(args[1] == "stoned") {
        tagged.roleappear = "Stoned"
        tagged.lastwillappear = null
        kill(tagged)
      }else if(args[1] == "cleaned") {
        alive().forEach(player => {
          if(player.role.name == "Consierge") {
            if(tagged.lastwill == null) {
              message.guild.channels.cache.get(player.interface).send(new Discord.MessageEmbed()
              .setDescription(`**${tagged.displayname}** n'a pas de lastwill`)
              .addField(`Le rôle de **${tagged.displayname}** était: `, `**${tagged.role.name}**`)
              .setColor(color))
            }else{
              message.guild.channels.cache.get(player.interface).send(new Discord.MessageEmbed()
              .setDescription(`Le rôle de **${tagged.displayname}** était: `, `**${tagged.role.name}**`)
              .addField(`Son **lastwill** était: ${tagged.lastwill}`)
              .setColor(color))  
            }
          }
        });
        tagged.roleappear = "Cleaned"
        tagged.lastwillappear = null
        kill(tagged)
      }else if(args[1] == "bloody") {
        tagged.lastwillappear = "Le lastwill était ensanglanté"
        kill(tagged)
      }
    }else{
      message.channel.send("stoned, cleaned ou blood?")
    }
  }
  
  else if(cmd == "listeactions") {
    if(!god && !dev) return message.channel.send(pasGod)
    let messageaction = ""

    for (let i = 0; i < alive().length; i++) {
      if(alive()[i].action.target2 == undefined) {
        messageaction = `${messageaction} **${alive()[i].action.author.displayname}**: ${alive()[i].action.type} ${alive()[i].action.target1.displayname}\n`  
      }else{
        messageaction = `${messageaction} **${alive()[i].action.author.displayname}**: ${alive()[i].action.type} ${alive()[i].action.target1.displayname} vers ${alive()[i].action.target2.displayname}\n`
      }
      
      
    }
    /*processActions()
    
    for (let i = 0; i < resultsactions.length; i++) {
      messageaction = `${messageaction} ${resultsactions[i].player}: ${resultsactions[i].message} \n`
    }*/

    adminchannel.send(messageaction)
  }

  else if(cmd == "speak") {
    if(partie.isStarted == false) return message.channel.send(pascomme)
    if(partie.time == "nuit") return message.channel.send(nuitembed)
    if(!message.member.roles._roles.has(vivant)) return message.channel.send(tpasvivant)
    villagechan.send(`<@${author.id}>: Je suis blackmailed`)
  }

  else if(cmd == "mvp") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(qui)
    tagged.mvp ++
    gameannoncchan.send(new Discord.MessageEmbed()
    .setDescription(`**${tagged.displayname}** est le **MVP** de la game!`)
    .setColor(color))
  }

  else if(cmd == "scroll") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(!tagged) return message.channel.send(qui)
    if(!args[1]) {
      tagged.scroll = null
      message.react("❌")
    }
    if(!roles.includes(args[1])) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Je ne trouve pas ce rôle")
    .setColor(color))
    let number = Math.random() * 1
    if(number >= 0.3) {
      commands.prototype.getAllRoles().forEach(role => {
        if(role.name == args[1]){
          tagged.scroll = role
        }
      });  
    }
    message.react("👍")
  }

  else if(cmd == "info") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(qui)
    message.channel.send(new Discord.MessageEmbed()
      .addField(`Name, Role, Whisp restant, VoteFor, Numéro`,`${tagged.displayname} ${tagged.role.name} ${tagged.whispRemaining} ${tagged.votesFor} ${tagged.number}`)
      .setColor(color))
  }

  else if(cmd == "alive") {
    if(!god && !dev) return message.channel.send(pasGod);
    if(!args[0]) return message.channel.send(qui)
    if(!taggedUser) return message.channel.send(trouvePas)
    if(!listejoueur.includes(new Player(taggedUser))){
      listejoueur.push(new Player(taggedUser))
    }
    listejoueur.forEach(player => {
      if(taggedUser.user.username  == player.name){
        tagged = player
      }
    })
    if(start == true) {
      if(alive().length < nbrJoueurMax) {
        if(!taggedUser._roles.includes(vivant)) {
          taggedUser.roles.add(vivant)
          taggedUser._roles.push(vivant)
          taggedUser.roles.remove(spec)
          tagged.number = numjoueur + 1
          numjoueur ++

          let messainter = new Discord.MessageEmbed()
          .setDescription(`Salut <@${tagged.id}>! Ceci est ton interface avec le jeu. Je m'explique. Ici tu auras la description de ton rôle, et tu pourras écrire tes ` + 
          "actions que tu veux effectuer dans la nuit. De plus, tu pourras poser toutes tes questions par rapport au fonctionnement du jeu. Finalement, " + 
          "tu peux écrire ici un last will qui sera révélé à tout le monde lors de ta mort. Ce channel sera vidé chaque jour à l'exception de ce message, " +
          "de ta description de rôle, ainsi que de ton last will.")
          .setColor(color)

          let interface = tagged.user.displayName
          message.guild.channels.create(interface + " Interface",{type:"text",})
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
            .then(setTimeout(() => {
              channel.send(messainter)
            }, 1500))
            tagged.interface = channel.id
            interfaces.push(channel.id)
            channel.setTopic(`<@&${godId}> pour avoir de l'aide direct`)
            })
            
            if(alive().length == nbrJoueurMax){
              partie.isStarted = true
              adminchannel.send(new Discord.MessageEmbed()
              .setDescription("Vous pouvez maintenant distribuer les rôles!")
              .setColor(color))
            } 
        }else{
          message.channel.send(new Discord.MessageEmbed()
          .setDescription("Ce joueur est déja dans la partie!")
          .setColor(color))
        }  
      }  
    }else{
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Tu dois start une game!")
      .setColor(color))
    }
  }

  else if(cmd == "swhisp") {

    let combien = new Discord.MessageEmbed()
      .setDescription("Combien de message?")
      .setColor(color);

      let wpj = new Discord.MessageEmbed()
        .setDescription(`Le nombre de whisp par jour est maintenant de **${args[0]}**`)
        .setColor(color);

      if(!god && !dev) return message.channel.send(pasGod);
      if(!args[0]) return message.channel.send(combien);
      nbWhispJour = args[0];
      message.channel.send(wpj);
  }

  else if(cmd == "vivants") {
    let joueuretnum = []
    let ordreJoueurs = alive()
    ordreJoueurs.sort(function(a, b){return a.number - b.number});
    ordreJoueurs.forEach(player => {
    joueuretnum.push(`${player.number}. ${player.displayname}`)
    });

    message.channel.send(new Discord.MessageEmbed()
      .setTitle("Le numéro des joueurs vivants")
      .setDescription(joueuretnum)
      .setColor(color))
  }

  else if(cmd == "nuit") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(partie.isStarted == false) return message.channel.send(pascomme)
    if(partie.time == "nuit") return message.channel.send(new Discord.MessageEmbed()
    .setDescription("C'est déja la **nuit**!")
    .setColor(color))

    if(args[0]) {
      let messagenuit = ""
      args.forEach(mots => {
        messagenuit += mots + " "
      });
      gameannoncchan.send(messagenuit)
    }
    partie.time = "nuit"
    numNuit = numNuit + 1

    villagechan.send(`<@&${vivant}>, Nuit **${numNuit}**`)
    adminchannel.send(new Discord.MessageEmbed()
    .setDescription(`Nuit **${numNuit}**`)
    .setColor(color))

    if(numNuit == 1 || numNuit == 3) {
      partie.fullmoon = false
    }else{
      partie.fullmoon = true
      villagechan.send("Cette nuit est une nuit de **pleine lune**!")
    }

    if(killed != null) {
      kill(killed)
      killed = null
    }

    if(partie.coven == true) {
      if(numNuit == 1) {
        villagechan.send("2 nuits avant que les coven aient le **Necronomicon**")
      }else if(numNuit == 2) {
        villagechan.send("1 nuit avant que les coven aient le **Necronomicon**")
      }else if(numNuit >= 3) {
        if(numNuit == 3) {
          villagechan.send("Les coven ont maintenant le **Necronomicon**")  
        }
  
        let playerNecro = null
        
        joueurCoven.forEach(joueur => {
          joueur.necro = false
          if(joueur.role.name == "Coven-Leader") {
            playerNecro = joueur
          }
        });

        if(joueurCoven.length > 1 && playerNecro == null) {
          let good = false
          do {
            playerNecro = joueurCoven[Math.floor(Math.random() * joueurCoven.length)]
            if(playerNecro.serverRoles.includes(vivant)) {
              if(playerNecro.role.name == "Meduse") {
                good = false
              }else{
                good = true
              }  
            }
          } while (good);
        }else if(playerNecro == null) {
          playerNecro = joueurCoven[0]
        }

        if(playerNecro != null) {
          playerNecro.necro = true
          covenchan.send(`**${playerNecro.displayname}** a le necronomicron`)
        }
      }
    }

    alive().forEach(player => {
      player.user.roles.remove(jour)
      player.user.roles.add(nuit)
      player.votesFor = 0
      player.actiondone = false
      player.whispRemaining = null

      if(player.role.alignement == "Mafia Support" || player.role.alignement == "Mafia Killing" || player.role.alignement == "Mafia Deception") {
        mafiaChan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true, SEND_MESSAGES: true}
        )
      }else if(player.role.name == "Vampire") {
        vampirechan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true, SEND_MESSAGES: true}
        )
      }else if(player.role.name == "Vampire-Hunter") {
        observatoirechan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true, SEND_MESSAGES: true}
        )
      }else if(player.role.alignement == "Coven Evil") {
        covenchan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true, SEND_MESSAGES: true}
        )  
      }
    });

    if(traitor == true) {
      mafiaChan.updateOverwrite(
        traitre.id,
        {VIEW_CHANNEL: true, SEND_MESSAGES: true}
      )
    }

    whispersChannels.forEach(whisper => {
      let chan = message.guild.channels.cache.get(whisper);
      if(chan != null) {
        chan.delete()
      }
    })
    whispersChannels = []

    if(jailed != "") {
      jailedChan.updateOverwrite(
      jailed.id,
      {"VIEW_CHANNEL": true})

      mafiaChan.updateOverwrite(
      jailed.id,
      {"VIEW_CHANNEL": false})

      spyChan.updateOverwrite(
      jailed.id,
      {"VIEW_CHANNEL": false})

      covenchan.updateOverwrite(
      jailed.id,
      {"VIEW_CHANNEL": false})
     
      jailedChan.send(`<@${jailed.id}> Vous êtes en prison, défendez vous pour éviter que le jailor vous exécute! ⛓️`)
      if(jailed.role.alignement == "Coven Evil") {
        covenchan.send(`${jailed.displayname} est en prison!`)
      }else if(jailed.role.alignement == "Mafia Deception" || jailed.role.alignement == "Mafia Killing" || jailed.role.alignement == "Mafia Support") {
        mafiaChan.send(`${jailed.displayname} est en prison!`)
      }
    }
  }

  else if(cmd == "w") {

    let demWhisp = new Discord.MessageEmbed()
      .setDescription("#demande-de-whisper svp")
      .setColor(color);

    let maxwhisp = new Discord.MessageEmbed()
      .setDescription(`Il y a un maximum de **${nbWhispJour}** whisp par jour`)
      .setColor(color);

    let whisp0 = new Discord.MessageEmbed()
    .setDescription("Tu ne peux pas whisp jour **0**")
    .setColor(color)
    
    if(partie.isStarted == false) return message.channel.send(pascomme)
    if(!message.member.roles._roles.has(vivant)) return message.channel.send(tpasvivant)
    if(message.channel.name != dmChan.name) return message.channel.send(demWhisp)
    if(numJour == 0) return message.channel.send(whisp0)
    if(partie.time == "nuit") return message.channel.send(nuitembed)
    if(!args[0]) return message.channel.send(qui)
    if(!taggedUser) return message.channel.send(trouvePas)
    if(message.mentions.members.first().id == message.author.id) return message.channel.send(pastoi)
    if(!taggedUser.roles.cache.has(vivant)) return message.channel.send(pasVivant)
    if(author.whispRemaining == 0) return message.channel.send(maxwhisp)

    if(tagged.role.name == "Maire" || author.role.name == "Maire") {
      if(tagged.role.isreveal == true || author.role.isreveal == true) return message.channel.send(new Discord.MessageEmbed()
      .setDescription("Le maire ne peut pas faire de whisp lorsqu'il est révélé.")
      .setColor(color))
    }

    let authorwhisp = ""
    if(author.user.nickname == null) {
      authorwhisp = author.user.user.username
    }else{
      authorwhisp = author.user.nickname
    }

    let demandé = ""
    if(taggedUser.nickname == null) {
      demandé = taggedUser.user.username
    }else{
      demandé = taggedUser.nickname
    }

    let channelName = `${demandé} et ${authorwhisp}`
    author.whispRemaining--

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
    }
    ])
    if(author.role.name == "Maire") {
      whispmaire.push(channel.id)
    }
    whispersChannels.push(channel.id)
    })
  }

  else if(cmd == "roles") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(partie.isStarted == false) return message.channel.send(pascomme)
    if(commencer == true) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("La partie est déja commencée!")
    .setColor(color))

    listerolechan.send(new Discord.MessageEmbed()
    .setTitle(`**Partie en cours: ${partie.gamemode.name}**`)
    .setDescription(partie.gamemode.list)
    .setColor(color))

    Commands.prototype.start(partie, alive())
    commencer = true
    let joueuretnum = []
    let roles = partie.listeroles
    roles.forEach(role => {
      listeroles.push(role.name)
    });
    if(!listeroles.includes("Agent-Infiltre")) {
      mafiaChan.send(`Vous sentez que vous pouvez parler en privé. <@&${vivant}>`)
    }

    alive().forEach(player => {
      let interfacechan = message.guild.channels.cache.get(player.interface)
      if(player.role.name == "Jailor") {
        jailChan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true}
        )
      }else if(player.role.name == "Agent-Infiltre") {
        spyChan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true}
        )
        mafiaChan.send(`Vous sentez que vous ne pouvez pas parler en privé. <@&${vivant}>`)
      }else if(player.role.name == "Vampire") {
        vampirechan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true, SEND_MESSAGES: true}
        )
      }else if(player.role.name == "Vampire-Hunter") {
        observatoirechan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true}
        )
      }else if(player.role.alignement == "Mafia Killing") {
        mafiaChan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true, SEND_MESSAGES: true}
        )
      }else if(player.role.alignement == "Mafia Support") {
        mafiaChan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true, SEND_MESSAGES: true}
        )
      }else if(player.role.alignement == "Mafia Deception") {
        mafiaChan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true, SEND_MESSAGES: true}
        )
      }else if(player.role.alignement == "Coven Evil") {
        covenchan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true, SEND_MESSAGES: true}
        )

        joueurCoven.push(player)
      }

      if(player.role.name == "Guardian-Angel") {
        let cible = null
        let good = false
        do{
          cible = alive()[Math.floor(Math.random() * alive().length)]
          if(cible.name != player.name) {
            if(!(cible.role.name == "Executionner") || (cible.role.name == "Jester") || (cible.role.name == "Guardian-Angel")) {
              good = true 
            }
          }
        }while (!good)
        interfacechan.send(new Discord.MessageEmbed()
        .setTitle("**Ton rôle**")
        .setDescription("**Voici des infos sur ton rôle**")
        .addField("**Ton rôle**", player.role.name)
        .addField("**Allignement**", player.role.alignement)
        .addField("**Description**", player.role.description)
        .addField("**Commande**", player.role.command)
        .addField("**Habiletée**", player.role.hab)
        .addField("**Ta cible**" , cible.displayname)
        .addField("**Gagnez avec**", player.role.winwith)
        .addField("**Plus d'info sur ton wiki**", player.role.wikiLink)
        .setColor(color))
        joueurroles.push(player.displayname + ", " + player.role.name)

    
        
      }else if(player.role.name == "Executionner") {
        let cible = null
        let good = false
        do{
          cible = alive()[Math.floor(Math.random() * alive().length)]
          if(cible.name != player.name) {
            if(!(cible.role.name == "Jailor") || (cible.role.name == "Maire")) {
              if(cible.role.alignement == "Town Investigative" || (cible.role.alignement == "Town Protective") || (cible.role.alignement == "Town Support") || (cible.role.alignement == "Town Killing")) {
                good = true 
              }
            }
          }
        }while (!good)
        interfacechan.send(new Discord.MessageEmbed()
        .setTitle("**Ton rôle**")
        .setDescription("**Voici des infos sur ton rôle**")
        .addField("**Ton rôle**", player.role.name)
        .addField("**Allignement**", player.role.alignement)
        .addField("**Description**", player.role.description)
        .addField("**Commande**", player.role.command)
        .addField("**Habiletée**", player.role.hab)
        .addField("**Ta cible**" , cible.displayname)
        .addField("**Gagnez avec**", player.role.winwith)
        .addField("**Plus d'info sur ton wiki**", player.role.wikiLink)
        .setColor(color))
        joueurroles.push(player.displayname + ", " + player.role.name)

      }else{
        interfacechan.send(new Discord.MessageEmbed()
        .setTitle("**Ton rôle**")
        .setDescription("**Voici des infos sur ton rôle**")
        .addField("**Ton rôle**", player.role.name)
        .addField("**Allignement**", player.role.alignement)
        .addField("**Description**", player.role.description)
        .addField("**Commande**", player.role.command)
        .addField("**Habiletée**", player.role.hab)
        .addField("**Gagnez avec**", player.role.winwith)
        .addField("**Plus d'info sur ton wiki**", player.role.wikiLink)
        .setColor(color))
        joueurroles.push(player.displayname + ", " + player.role.name)
      }

      if(player.role.alignement == "Town Support" || player.role.alignement == "Town Killing" || player.role.alignement == "Town Investigative") {
        listeTown.push(player)
      }
      player.roleappear = player.role.name
    });

    if(traitor == true) {
      traitre = shuffle(listeTown)[Math.floor(Math.random() * listeTown.length)]
      mafiaChan.updateOverwrite(
        traitre.id,
        {VIEW_CHANNEL: true, SEND_MESSAGES: true}
      )
      bot.channels.cache.get(traitre.interface).send(new Discord.MessageEmbed()
        .setDescription("**Tu es le traitre de la town! Tu es en équipe avec la mafia!**")
        .setColor(color))
    }

    let ordreJoueurs = alive()
    ordreJoueurs.sort(function(a, b){return a.number - b.number});
    ordreJoueurs.forEach(player => {
    joueuretnum.push(`${player.number}. ${player.displayname}`)
    });

    adminchannel.send(new Discord.MessageEmbed()
    .setTitle("**Liste des joueurs avec leurs roles**")
    .setDescription(joueurroles)
    .setColor(color))

    adminchannel.send(new Discord.MessageEmbed()
    .setTitle(`Liste de rôle: **(${partie.gamemode.name})**`)
    .setDescription(listeroles)
    .setColor(color))

    listerolechan.send(new Discord.MessageEmbed()
    .setTitle("Le numéro des joueurs")
      .setDescription(joueuretnum)
      .setColor(color))

    partie.time = "jour"
    numJour = numJour + 1
  
    villagechan.send(`<@&${vivant}>, Jour **${numJour}**`)
    adminchannel.send(new Discord.MessageEmbed()
    .setDescription(`Jour **${numJour}**`)
    .setColor(color))
  
    alive().forEach(player => {
      player.user.roles.add(jour)
      player.user.roles.remove(nuit)
      player.whispRemaining = nbWhispJour
      player.hasVoted = false
      player.isjailed = false
    });
  }

  else if(cmd == "results"){
    if(!god && !dev) return message.channel.send(pasGod)
    processVote()
  }

  else if(cmd == "no"){
    if(!god && !dev) return message.channel.send(pasGod)
    killed = null
  }

  else if(cmd == "coven") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(partie.isStarted == true) return message.channel.send(commencee)
    if(partie.coven == true) {
      partie.coven = false
      message.channel.send("Le coven à été désactivé!")
    }else{
      partie.coven = true
      message.channel.send("Le coven à été activé!")
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
      if(args[0] == gm.name) {
        if(gm.coven == true && partie.coven == false) return message.channel.send(new Discord.MessageEmbed()
        .setDescription("Active le coven! -> !coven")
        .setColor(color))

        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Mode de jeu **${gm.name}** choisi!`)
        .setColor(color))
        partie.gamemode = gm
        nbrJoueurMax = gm.list.length
        found = true
      }
    });
    if(!found) {
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Je ne trouve pas ce **gamemode**!")
      .setColor(color))
    }
  }

  else if(cmd == "nouvgm") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Quel nom de gamemode?")
    .setColor(color))
    if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Quel rôles?")
    .setColor(color))

    let good = true
    let nouvgmliste = []
    let checkunique = []
    let multiunique = false
    let memegm = false

    listeGm.forEach(gm => {
      if(args[0] == gm.name) {
        memegm = true
      }
    });
    if(memegm) return message.channel.send(new Discord.MessageEmbed()
    .setDescription(`Le gamemode **${args[0]}** existe déjà!`)
    .setColor(color))
    

    args.slice(1).forEach(arguments => {
      if(rolesEtAlig.includes(arguments)) {
        if(rolesunique.includes(arguments)){
          if(checkunique.includes(arguments)) {
            good = false
            multiunique = true
          }
        }
        if(good == true) {
          if(arguments == "ti") {
            nouvgmliste.push("Town Investigative")
            checkunique.push("ti")
          }else if(arguments == "tp") {
            nouvgmliste.push("Town Protective")
            checkunique.push("tp")
          }else if(arguments == "ts") {
            nouvgmliste.push("Town Support")
            checkunique.push("ts")
          }else if(arguments == "tk") {
            nouvgmliste.push("Town Killing")
            checkunique.push("tk")
          }else if(arguments == "md") {
            nouvgmliste.push("Mafia Deception")
            checkunique.push("md")
          }else if(arguments == "ms") {
            nouvgmliste.push("Mafia Support")
            checkunique.push("ms")
          }else if(arguments == "mk") {
            nouvgmliste.push("Mafia Killing")
            checkunique.push("mk")
          }else if(arguments == "nb") {
            nouvgmliste.push("Neutral Benin")
            checkunique.push("nb")
          }else if(arguments == "nk") {
            nouvgmliste.push("Neutral Killing")
            checkunique.push("nk")
          }else if(arguments == "ne") {
            nouvgmliste.push("Neutral Evil")
            checkunique.push("ne")
          }else if(arguments == "nc") {
            nouvgmliste.push("Neutral Chaos")
            checkunique.push("nc")
          }else if(arguments == "rt") {
            nouvgmliste.push("Random Town")
            checkunique.push("rt")
          }else if(arguments == "rm") {
            nouvgmliste.push("Random Mafia")
            checkunique.push("rm")
          }else if(arguments == "rn") {
            nouvgmliste.push("Random Neutral")
            checkunique.push("rn")
          }else if(arguments == "any") {
            nouvgmliste.push("Any")
            checkunique.push("any")
          }else if(arguments == "ce") {
            nouvgmliste.push("Coven Evil")
            checkunique.push("ce")
          }else{
            nouvgmliste.push(arguments)
            checkunique.push(arguments)
          }
        }
      }else{
        good = false
      }
    });

    if(good === true) {
      nouvgmoffi = nouvgmliste
      partie.persoGm = nouvgmoffi
      partie.personom = args[0]
      message.channel.send(new Discord.MessageEmbed()
      .setTitle(`Gamemode: ${args[0]}`)
      .setDescription(nouvgmoffi)
      .addField("Nombre de joueurs", args.length - 1)
      .setColor(color))
      nomgamemode = args[0]
      listeGm.push({name : nomgamemode, list : nouvgmoffi})
      nomgamemode = null
    }else if(good === false && multiunique === false){
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Il y a un/des role(s) que je ne connais pas! **!helpgm pour de l'aide**")
      .setColor(color))
    }else if(multiunique === true) {
      message.channel.send(new Discord.MessageEmbed()
      .setDescription(`Tu as mis plus d'un même rôle unique dans la liste.`)
      .setColor(color))
    }  
  }

  else if(cmd == "delgm") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(partie.isStarted == true) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("La partie est déja commencée!")
    .setColor(color))

    let nomliste = []

    listeGm.slice(3).forEach(liste => {
      nomliste.push(liste.name)
    });

    if(nomliste.includes(args[0])) {
      message.channel.send(new Discord.MessageEmbed()
      .setDescription(`Le mode de jeux **${args[0]}** à été supprimé!`)
      .setColor(color))

      for( var i = 0; i < listeGm.length; i++){                          
        if(listeGm[i].name === args[0]) { 
            listeGm.splice(i, 1); 
            i--; 
        }
      }
      nomgamemode = null
      nouvgmoffi = []
    }else if(nomliste == "") {
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Il n'y a aucun gamemode perso!")
      .setColor(color))
    }else if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
    .addField("Quel gamemode?", nomliste)
    .setColor(color))
    else{
      message.channel.send(new Discord.MessageEmbed()
      .addField("Je ne trouve pas ce gamemode! Voici ce que tu peut **supprimé**: ", nomliste)
      .setColor(color))
    }
  }

  else if(cmd == "god") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(qui)

    taggedUser.roles.add(godId)
  }

  else if(cmd == "ungod") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(!args[0]) return message.channel.send(qui)

    taggedUser.roles.remove(godId)
  }

  else if(cmd == "helpstart") {
    if(!god && !dev) return message.channel.send(pasGod)
    message.channel.send(new Discord.MessageEmbed()
    .setTitle("**Comment démarer une partie**")
    .setDescription(`Voici les commandes dans **l'ordre**:
    (!coven)
    (!traitor)
    !gamemode [gamemode]
    !heurevote [heure] en format 24h
    !start (nb de joueur) (message)
    !roles
    Si vous avez des questions, venez parler a Pageau.`)
    .addField("**Explications des commandes**", "=================================")
    .addField("!coven", `Permet d'activer le coven si c'est un partie Coven.`)
    .addField("!traitor", `Permet d'activer le traitor si c'est un partie town traitor.`)
    .addField("!gamemode", `Cette commande est utile pour sélectionner un gamemode avant de débuter la partie. Si tu fais juste la commande, tu verras tous les gamemodes disponibles (en parenthèse).
    Tu as juste à faire ex: !gamemode classique15`)
    .addField("!heurevote", `Permet de faire passer automatiquement le résultat de pendaison.`)
    .addField("!swhisp", `C'est tout simplement pour mettre une limite de whisp par jour. Présentement, la valeur est de **${nbWhispJour}**.`)
    .addField("!start", `La commande !start permet de démarer la partie. (Le mode de jeux doit être choisi avant) Le nombre de joueurs maximum se détermine avec le nombre de rôle qu'il y a dans le mode de jeux. (Même les modes perso)
    Par contre, on peut l'overwrite en tappant un nombre comme premier "mot". Aussi, il est possible de personnalisé le message du début en inscrivant au moins 2 mots. Ex: !start J'aime Felix`)
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
    rn: Random neutral
    ce: Coven evil`)
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
      .addField("!swhisp [nbWhisp]", "Mettre la limite de whisp par jour")
      .addField("!coven", "Toggle le mode coven")
      .addField("!gamemode [gamemode]", "Choisie le gamemode de la partie")
      .addField("!jour (message)", "Permet de mettre le jour")
      .addField("!nuit (message)", "Permet de mettre la nuit")
      .addField("!traitor", "Toggle le mode town traitor")
      .addField("!listeactions", "Voir la liste de tout les actions")
      .addField("!heurevote", "Ajoute une heure dans un format 24H pour que le !results se fasse tout seul.")
      .addField("!roles", "Donne les rôles a chaques joueurs")
      .addField("!info @[User]", "Pour avoir de l'info sur le joueur")
      .addField("!alive @[User]", "Pour mettre quelqu'un en vie")
      .addField("!result", "Pour avoir le résultat du vote")
      .addField("!no", "Cancell le résultat du vote")
      .addField("!start (Nb Joueurs)", "Pour commencer la game")
      .addField("!start (Nb Joueurs) (message)", "Tu peut aussi faire un message personnalisé!")
      .addField("!end", "Pour finir la game")
      .addField("!jail @[User]", "Pour mettre quelqu'un en prison")
      .addField("!nouvgm [Nom] [liste roles]", "Permet de créé un gamemode personnalisé")
      .addField("!delgm [gamemode]", "Pour supprimé un gamemode")
      .addField("!kill @[User]", "Pour tuer quelqu'un. Si il est stoned ou cleaned, écrit !kill @[User] stone/cleaned")
      .addField("!god [User]", "Pour mettre le rôle de GOD à quelqu'un.")
      .addField("!ungod [User]", "Pour enlever le rôle GOD à quelqu'un.")
      .addField("!lastwill", "Écrit ton last will ici. Tu peux aussi voir ton last will comme ça: !lastwill")
      .addField("!lastwill [User]", "Pour voir le lastwill d'un joueur")
      .addField("!note", "Écrit une note ici. Tu peut aussi voir ta note comme ça: !note ")
      .addField("!vivants", "Pour afficher la liste des joueurs vivants.")
      .addField("!speak", "Permet de parler dans le village si tu est blackmailed")
      .addField("!w @[User]", "Whisper quelqu'un")
      .addField("!p @[User]", "Pendre quelqu'un")
      .addField("!help", "Avoir de l'aide")
      .setColor(color);

    let helpcommandsvivant = new Discord.MessageEmbed()
      .setTitle("**Commandes Vivants**")
      .addField("!w @[User]", "Whisper quelqu'un")
      .addField("!p @[User]", "Pendre quelqu'un")
      .addField("!lastwill", "Écrit ton last will ici. Tu peut aussi voir ton last will comme ça: !lastwill")
      .addField("!note", "Écrit une note ici. Tu peut aussi voir ta note comme ça: !note ")
      .addField("!jail @[User]", "Seulement le jailor peut faire cette commande")
      .addField("!vivants", "Pour afficher la liste des joueurs vivants.")
      .addField("!speak", "Permet de parler dans le village si tu est blackmailed")
      .addField("!help", "Pour avoir de l'aide")
      .addField("@Bilou", "Pour summon un être tout puissant qui viendra vous aider")
      .setColor(color);

    if(god || dev) {
      message.channel.send(helpcommandsgod);
    }else{
      message.channel.send(helpcommandsvivant); 
    }
  }
});

bot.on('message', async (message) => {
  if(message.author.bot) return
  if(!message.content.startsWith(prefix)) return
  var taggedUser = message.mentions.members.array()
  var god = message.member.roles.cache.has(godId)
  var dev = message.member.roles.cache.has(devid)
  let jailChan = message.guild.channels.cache.get(jail)
  let spyChan = message.guild.channels.cache.get(spyHideout)
  let listerolechan = message.guild.channels.cache.get(listeroleid)
  let jailedChan = message.guild.channels.cache.get(jailedid)
  let villagechan = message.guild.channels.cache.get(villageid)
  let gameannoncchan = message.guild.channels.cache.get(gameannoncid)
  let adminchannel = message.guild.channels.cache.get(adminchat)
  let pendChan = message.guild.channels.cache.get(panchanid)
  let mafiaChan = message.guild.channels.cache.get(mafiaChat)
  let covenchan = message.guild.channels.cache.get(covenid)
  let vampirechan = message.guild.channels.cache.get(vampirechat)
  let observatoirechan = message.guild.channels.cache.get(observatoire)
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

  if(cmd == "start"){
    if(!god && !dev) return message.channel.send(pasGod)

    if(partie.isStarted == true) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("La partie est déja commencée!")
    .setColor(color))
    if(start) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Tu as déja envoyer un start")
    .setColor(color))
    if(HeureResults == "") return message.channel.send(new Discord.MessageEmbed()
    .setDescription("À quelle heure le vote passe? **!heurevote**")
    .setColor(color))
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
    .setDescription("Quel gamemode? **!gamemode**")
    .setColor(color)
    if(partie.gamemode == null) return message.channel.send(quelgm)

    let messagestart = ""    
    if(!(isNaN(args[0]))) {
      nbrJoueurMax = args[0]
      slineNum = 1
    }
    if(args.length >= 2) {
        args.slice(slineNum).forEach(mots => {
        messagestart += mots + " "
      });
      messageJouer = messagestart
    }
    let confirmGame = new Discord.MessageEmbed()
    .setTitle("Paramètre de la partie")
    .setDescription(`**Gamemode:** ${partie.gamemode.name}
    **Heure Vote:** ${heureTxt} ${am_pm}
    **Coven:** ${partie.coven}
    **Traitor:** ${traitor}
    **Nombre de joueurs:** ${nbrJoueurMax}
    **Whisp par jour:** ${nbWhispJour}
    **Message start:** ${messageJouer}
    **Liste de rôles:** ${partie.gamemode.list}`)
    .setFooter("Cliquez sur le pouce si tout est correct!")
    .setColor(color)

    const confirmstart = await adminchannel.send(confirmGame)
      await confirmstart.react("👍")
  }

  else if (cmd == "startfrom") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(args[0]) {
      if(!isNaN(args[0])) {
        numJour = args[0] - 1
        numNuit = args[0] - 1
      }
    } 
    console.log(`${numJour}, ${numNuit}`)
    partie.isStarted = true
    commencer = true
    let joueuretnum = []
    let roles = partie.listeroles
    roles.forEach(role => {
      listeroles.push(role.name)
    });

    if(!listeroles.includes("Agent-Infiltre")) {
      mafiaChan.send(`Vous sentez que vous pouvez parler en privé. <@&${vivant}>`)
    }

    alive().forEach(player => {
      let interfacechan = message.guild.channels.cache.get(player.interface)
      if(player.role.name == "Jailor") {
        jailChan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true}
        )
      }else if(player.role.name == "Agent-Infiltre") {
        spyChan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true}
        )
        mafiaChan.send(`Vous sentez que vous ne pouvez pas parler en privé. <@&${vivant}>`)
      }else if(player.role.name == "Vampire") {
        vampirechan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true, SEND_MESSAGES: true}
        )
      }else if(player.role.name == "Vampire-Hunter") {
        observatoirechan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true}
        )
      }else if(player.role.alignement == "Mafia Killing") {
        mafiaChan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true, SEND_MESSAGES: true}
        )
      }else if(player.role.alignement == "Mafia Support") {
        mafiaChan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true, SEND_MESSAGES: true}
        )
      }else if(player.role.alignement == "Mafia Deception") {
        mafiaChan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true, SEND_MESSAGES: true}
        )
      }else if(player.role.alignement == "Coven Evil") {
        covenchan.updateOverwrite(
          player.id,
          {VIEW_CHANNEL: true, SEND_MESSAGES: true}
        )

        joueurCoven.push(player)
      }

      if(player.role.name == "Guardian-Angel") {
        let cible = null
        let good = false
        do{
          cible = alive()[Math.floor(Math.random() * alive().length)]
          if(cible.name != player.name) {
            if(!(cible.role.name == "Executionner") || (cible.role.name == "Jester") || (cible.role.name == "Guardian-Angel")) {
              good = true 
            }
          }
        }while (!good)
        interfacechan.send(new Discord.MessageEmbed()
        .setTitle("**Ton rôle**")
        .setDescription("**Voici des infos sur ton rôle**")
        .addField("**Ton rôle**", player.role.name)
        .addField("**Allignement**", player.role.alignement)
        .addField("**Description**", player.role.description)
        .addField("**Commande**", player.role.command)
        .addField("**Habiletée**", player.role.hab)
        .addField("**Ta cible**" , cible.displayname)
        .addField("**Gagnez avec**", player.role.winwith)
        .addField("**Plus d'info sur ton wiki**", player.role.wikiLink)
        .setColor(color))
        joueurroles.push(player.displayname + ", " + player.role.name)

    
        
      }else if(player.role.name == "Executionner") {
        let cible = null
        let good = false
        do{
          cible = alive()[Math.floor(Math.random() * alive().length)]
          if(cible.name != player.name) {
            if(!(cible.role.name == "Jailor") || (cible.role.name == "Maire")) {
              if(cible.role.alignement == "Town Investigative" || (cible.role.alignement == "Town Protective") || (cible.role.alignement == "Town Support") || (cible.role.alignement == "Town Killing")) {
                good = true 
              }
            }
          }
        }while (!good)
        interfacechan.send(new Discord.MessageEmbed()
        .setTitle("**Ton rôle**")
        .setDescription("**Voici des infos sur ton rôle**")
        .addField("**Ton rôle**", player.role.name)
        .addField("**Allignement**", player.role.alignement)
        .addField("**Description**", player.role.description)
        .addField("**Commande**", player.role.command)
        .addField("**Habiletée**", player.role.hab)
        .addField("**Ta cible**" , cible.displayname)
        .addField("**Gagnez avec**", player.role.winwith)
        .addField("**Plus d'info sur ton wiki**", player.role.wikiLink)
        .setColor(color))
        joueurroles.push(player.displayname + ", " + player.role.name)

      }else{
        interfacechan.send(new Discord.MessageEmbed()
        .setTitle("**Ton rôle**")
        .setDescription("**Voici des infos sur ton rôle**")
        .addField("**Ton rôle**", player.role.name)
        .addField("**Allignement**", player.role.alignement)
        .addField("**Description**", player.role.description)
        .addField("**Commande**", player.role.command)
        .addField("**Habiletée**", player.role.hab)
        .addField("**Gagnez avec**", player.role.winwith)
        .addField("**Plus d'info sur ton wiki**", player.role.wikiLink)
        .setColor(color))
        joueurroles.push(player.displayname + ", " + player.role.name)
      }

      if(player.role.alignement == "Town Support" || player.role.alignement == "Town Killing" || player.role.alignement == "Town Investigative") {
        listeTown.push(player)
      }
      player.roleappear = player.role.name
    });

    if(traitor == true) {
      traitre = shuffle(listeTown)[Math.floor(Math.random() * listeTown.length)]
      mafiaChan.updateOverwrite(
        traitre.id,
        {VIEW_CHANNEL: true, SEND_MESSAGES: true}
      )
      bot.channels.cache.get(traitre.interface).send(new Discord.MessageEmbed()
        .setDescription("**Tu es le traitre de la town! Tu es en équipe avec la mafia!**")
        .setColor(color))
    }

    let ordreJoueurs = alive()
    ordreJoueurs.sort(function(a, b){return a.number - b.number});
    ordreJoueurs.forEach(player => {
    joueuretnum.push(`${player.number}. ${player.displayname}`)
    });

    adminchannel.send(new Discord.MessageEmbed()
    .setTitle("**Liste des joueurs avec leurs roles**")
    .setDescription(joueurroles)
    .setColor(color))

    adminchannel.send(new Discord.MessageEmbed()
    .setTitle(`Liste de rôle: **(${partie.gamemode.name})**`)
    .setDescription(listeroles)
    .setColor(color))

    listerolechan.send(new Discord.MessageEmbed()
    .setTitle("Le numéro des joueurs")
      .setDescription(joueuretnum)
      .setColor(color))

    partie.time = "jour"
    numJour = numJour + 1
  
    villagechan.send(`<@&${vivant}>, Jour **${numJour}**`)
    adminchannel.send(new Discord.MessageEmbed()
    .setDescription(`Jour **${numJour}**`)
    .setColor(color))
  
    alive().forEach(player => {
      player.user.roles.add(jour)
      player.user.roles.remove(nuit)
      player.whispRemaining = nbWhispJour
      player.hasVoted = false
      player.isjailed = false
    });

  }

  else if(cmd == "jail") {
    if(partie.isStarted == false) return message.channel.send(pascomme)
    if(!message.member.roles._roles.has(vivant)) return message.channel.send(tpasvivant)
    if(author.interface == message.channel.id) {
      if(author.role.name == "Jailor") {
        let joueurvisé = ""

        if(!args[0]) {
          jailed = ""
          message.channel.send(new Discord.MessageEmbed()
        .setDescription("Plus personne n'est **Jailed**")
        .setColor(color)).then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 2000);
        });
        }

        alive().forEach(joueur => {
          if(joueur.number == args[0]) {
            joueurvisé = joueur
          }
        });
        jailed = joueurvisé
        if(joueurvisé == "") return message.channel.send(trouvePas)
        if(!joueurvisé.user.roles.cache.has(vivant)) return message.channel.send(pasVivant)
        if(joueurvisé.user.id == message.author.id) return message.channel.send(new Discord.MessageEmbed()
        .setDescription("Tu ne peut pas te jailed toi même!")
        .setColor(color)).then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 2000);
        });

        if(partie.time == "jour") {
          let interfachan = message.guild.channels.cache.get(author.interface)

          interfachan.send(`Vous avez emprisonné avec succès **${jailed.displayname}** ce soir.`)
          jailed.isjailed = true

        }else{
          message.delete()
          message.channel.send(new Discord.MessageEmbed()
          .setDescription("Ce n'est pas encole le **jour**!")
          .setColor(color)).then((sent) => {
            setTimeout(function () {
              sent.delete();
            }, 2000);
          });
        }
      }else{
        message.delete()
        message.channel.send(new Discord.MessageEmbed()
        .setDescription("Tu n'est pas le **jailor**!")
        .setColor(color)).then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 2000);
        });
      }
    }else{
      message.delete()
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Tu ne peut pas faire cette commande ici")
      .setColor(color)).then((sent) => {
        setTimeout(function () {
          sent.delete();
        }, 2000);
      });
    }
  }

  else if(cmd == "reveal") {
    if(partie.isStarted == false) return message.channel.send(pascomme)
    if(!message.member.roles._roles.has(vivant)) return message.channel.send(tpasvivant)
    if(author.interface == message.channel.id) {
      if(author.role.name == "Maire") {
        if(author.role.isreveal == false) {
          message.channel.send(new Discord.MessageEmbed()
          .setDescription("Tu as dévoiler ton rôle au village")
          .setColor(color))

          let usernameauth = ""
          if(message.member.nickname == null) {
            usernameauth = message.member.user.username
          }else{
            usernameauth = message.member.nickname
          }

          whispmaire.forEach(whisp => {
            message.guild.channels.cache.get(whisp).delete()

          for( var i = 0; i < whispersChannels.length; i++){ 
                                    
            if ( whispersChannels[i] === whisp) { 
                whispersChannels.splice(i, 1); 
                i--; 
            }
          }  
          });
          author.role.isreveal = true
          gameannoncchan.send(`<@&${vivant}>, **${usernameauth}** se révèle être le Maire!`)
          message.member.setNickname(`Maire ${usernameauth}`)
        }else{
          message.channel.send(new Discord.MessageEmbed()
          .setDescription("Tu t'es déjà reveal!")
          .setColor(color))
        }
      }else{
        message.deleted()
        message.channel.send(new Discord.MessageEmbed()
        .setDescription("Tu n'est pas le **Maire!**")
        .setColor(color)).then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 2000);
        });
      }      
    }else{
      message.deleted()
      message.channel.send(new Discord.MessageEmbed()
      .setDescription("Vas dans ton interface!")
      .setColor(color)).then((sent) => {
        setTimeout(function () {
          sent.delete();
        }, 2000);
      });
    }

  }

  else if(cmd == "jour") {
    if(!god && !dev) return message.channel.send(pasGod)
    if(partie.isStarted == false) return message.channel.send(pascomme)
    if(partie.time == "jour") return message.channel.send(new Discord.MessageEmbed()
    .setDescription("C'est déja le **jour**!")
    .setColor(color))

    votemaire = 0

    if(args[0]) {
      let messagejour = ""
      args.forEach(mots => {
        messagejour += mots + " "
      });
      gameannoncchan.send(messagejour)
      
    }
    actions.forEach(action => {
    });

    console.log(alive().length)

    partie.time = "jour"
    numJour = numJour + 1
    jailed = ""
    actions = []

    villagechan.send(`<@&${vivant}>, Jour **${numJour}**`)
    adminchannel.send(new Discord.MessageEmbed()
    .setDescription(`Jour **${numJour}**`)
    .setColor(color))

    alive().forEach(player => {
      player.user.roles.add(jour)
      player.user.roles.remove(nuit)
      player.whispRemaining = nbWhispJour
      player.hasVoted = false
      player.isjailed = false
      player.isframed = false
      player.action = null
      player.lastwillappear = player.lastwill
      player.roleappear = player.role.name

      if(player.role.name == "Maire") {
        if(player.role.isreveal == true) {
          votemaire = 2
        }
      }
      
      jailedChan.updateOverwrite(
        player.id,
        {"VIEW_CHANNEL": null}
      )
      if(player.role.alignement == "Mafia Support" || player.role.alignement == "Mafia Killing" || player.role.alignement == "Mafia Deception") {
        mafiaChan.updateOverwrite(
          player.id,
          {"VIEW_CHANNEL": true, "SEND_MESSAGES": false}
        )
      }else if(player.role.name == "Vampire") {
        vampirechan.updateOverwrite(
          player.id,
          {"VIEW_CHANNEL": true, "SEND_MESSAGES": false}
        )
      }else if(player.role.name == "Vampire-Hunter") {
        observatoirechan.updateOverwrite(
          player.id,
          {"VIEW_CHANNEL": true, "SEND_MESSAGES": false}
        )
      }else if(player.role.alignement == "Coven Evil") {
        covenchan.updateOverwrite(
          player.id,
          {"VIEW_CHANNEL": true, "SEND_MESSAGES": false}
        )  
      } 
    });

    if(traitor == true) {
      mafiaChan.updateOverwrite(
        traitre.id,
        {VIEW_CHANNEL: true, SEND_MESSAGES: false}
      )
    }

    pendChan.send(new Discord.MessageEmbed()
    .setDescription(`**${Math.floor((alive().length + votemaire) / 2) + 1}** votes sont nécéssaire pour pendre aujourd'hui.`)
    .setColor(color))
    pendChan.send(resultsVotes.setDescription("Aucun vote pour le moment")).then(message => {
      resultID = message.id;
    })

    await clearJail(jailedChan);
  }

  else if(cmd == "p") {
    let pendrChan = new Discord.MessageEmbed()
      .setDescription("#vote-pour-pendre SVP")
      .setColor(color)

    let pasVivant = new Discord.MessageEmbed()
    .setDescription("Ce joueur n'est pas vivant")
    .setColor(color)

    let jour0 = new Discord.MessageEmbed()
    .setDescription("Tu ne peux pas voter jour **0**!")
    .setColor(color)

    if(partie.isStarted == false) return message.channel.send(pascomme)
    if(!message.member.roles._roles.has(vivant)) return message.channel.send(tpasvivant)
    if(message.channel.name != pendChan.name) return message.channel.send(pendrChan)
    if(numJour == 0) return message.channel.send(jour0)
    if(!args[0]) return message.channel.send(qui)
    if(!taggedUser[0]) return message.channel.send(trouvePas)
    if(message.mentions.members.first().id == message.author.id) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Tu ne peut pas voter pour toi même")
    .setColor(color))
    if(!taggedUser[0].roles.cache.has(vivant)) return message.channel.send(pasVivant)

    if(author.role.name == "Maire" && author.role.isreveal == true) {
      if(!author.hasVoted) {
        tagged.votesFor += 3
        author.hasVoted = true
        author.registeredVote = tagged
      }else{
        author.registeredVote.votesFor -= 3
        author.registeredVote = tagged
        tagged.votesFor += 3
      }
    }else{
      if(!author.hasVoted) {
        tagged.votesFor ++
        author.hasVoted = true
        author.registeredVote = tagged
      }else{
        author.registeredVote.votesFor --
        author.registeredVote = tagged
        tagged.votesFor ++
      }  
    }

    let listesVotes = ""
    alive().forEach(player => {
      if(player.votesFor > 0) {
        listesVotes += player.displayname + " : " + player.votesFor + "\n"
      }
    });
    resultsVotes.setDescription(listesVotes)
    pendChan.send(resultsVotes)
  }

  if(partie.isStarted == true) {
    if(!message.member.roles._roles.has(vivant)) return
    let command = author.role.command
    if(cmd == command) {
      if(author.user._roles.includes(vivant)) {
        if(partie.time == "nuit") {
          if(partie.isStarted == true) {
            if(author.interface == message.channel.id) {
              let joueurvisé1 = ""
              let joueurvisé2 = ""

              if(!isNaN(args[0])) {
                alive().forEach(joueur => {
                  if(joueur.number == args[0]) {
                    joueurvisé1 = joueur
                  }
                });
              }
              
              if(author.role.needsTwoTargets) {
                if(args[1]) {
                  if(!isNaN(args[1])) {
                    alive().forEach(joueur => {
                      if(joueur.number == args[1]) {
                        joueurvisé2 = joueur
                      }
                    });
                  } 
                }  
              }
              
              

              if(author.actiondone == true) {
                author.role.use ++
                author.action = null
                for( var i = 0; i < actions.length; i++){ 
                  if (actions[i].author.name == author.name) { 
                    actions.splice(i, 1); 
                  }
                }
              }

              username = []
              if(author.role.needsTwoTargets == true) {
                if(joueurvisé1 == "" || joueurvisé2 == "") return message.channel.send(new Discord.MessageEmbed()
                  .setDescription("Il me faut 2 joueurs!")
                  .setColor(color))
                  if(!joueurvisé2.user.roles.cache.has(vivant)) return message.channel.send(pasVivant)
                  if(!joueurvisé1.user.roles.cache.has(vivant)) return message.channel.send(pasVivant)
                      
              }else if(author.role.needsTwoTargets == false) {
                if(joueurvisé1 == "") return message.channel.send(new Discord.MessageEmbed()
                  .setDescription("Qui?")
                  .setColor(color))
                if(!joueurvisé1.user.roles.cache.has(vivant)) return message.channel.send(pasVivant)
              }else if(author.role.needsTwoTargets == null) {
                joueurvisé1 = ""
              }
              if(args[0] && (author.role.needsTwoTargets != null)) {
                  username.push(joueurvisé1)
                if(!isNaN(args[1])) {
                  username.push(joueurvisé2)
                }
              }

              if(author.role.needsTwoTargets) {
                message.channel.send(`Tu as décidé (de/d') ${author.role.command} **${joueurvisé1.displayname}** et **${joueurvisé2.displayname}**`)
                author.action = {author : author,  target1 : joueurvisé1, target2 : joueurvisé2, type : author.role.command}
              }else{
                message.channel.send(`Tu as décidé (de/d') ${author.role.command} **${joueurvisé1.displayname}**`)
                author.action = {author : author,  target1 : joueurvisé1, type : author.role.command}
              }
              
              message.react("👍")

            }else{
              message.delete()
              message.channel.send(new Discord.MessageEmbed()
              .setDescription(`Vas dans ton interface ${message.author}!`)
              .setColor(color)).then((sent) => {
                setTimeout(function () {
                  sent.delete();
                }, 3000);
              });
            }
          }    
        }else{
          message.delete()
          message.channel.send(new Discord.MessageEmbed()
          .setDescription("Ce n'est pas encore la **nuit**!")
          .setColor(color)).then((sent) => {
            setTimeout(function () {
              sent.delete();
            }, 3000);
          });
        }
      }else{
        message.channel.send(new Discord.MessageEmbed()
        .setDescription("Tu n'est pas **Vivant**")
        .setColor(color)).then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 3000);
        });
      }  
    }
  }
});

bot.on("messageReactionAdd", async (reaction, user) => {
  let adminchannel = reaction.message.guild.channels.cache.get(adminchat)
  let qvjChan = reaction.message.guild.channels.cache.get(quiVeutJouer)
  let listerolechan = reaction.message.guild.channels.cache.get(listeroleid)
  if(user.bot) return;
  var reactoradd = reaction.message.channel.guild.members.cache.get(user.id)
  var reactor = null
  if(reaction.message.channel == quiVeutJouer) {
    if(!listejoueur.includes(new Player(reactoradd))){
      listejoueur.push(new Player(reactoradd))
    }
    listejoueur.forEach(player => {
      if(user.username == player.name){
        reactor = player
      }
    })

    if(reaction.emoji.id == turtleId){
      if(!reactor.serverRoles.includes(vivant)) {
        if(reactor.serverRoles.includes(godId)) { //!
          if(alive().length < nbrJoueurMax) {
            reactor.user.roles.add(vivant)
            reactor.serverRoles.push(vivant)
            reactor.user.roles.remove(spec)
            reactor.number = numjoueur + 1
            numjoueur ++

            let messainter = new Discord.MessageEmbed()
            .setDescription(`Salut <@${reactor.id}>! Ceci est ton interface avec le jeu. Je m'explique. Ici tu auras la description de ton rôle, et tu pourras écrire tes ` + 
            "actions que tu veux effectuer dans la nuit. De plus, tu pourras poser toutes tes questions par rapport au fonctionnement du jeu. Finalement, " + 
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
              }
              ])
              .then(setTimeout(() => {
                channel.send(messainter)
              }, 1500))
              reactor.interface = channel.id
              interfaces.push(channel.id)
              channel.setTopic(`<@&${godId}> pour avoir de l'aide direct`)
              })

            if(alive().length == nbrJoueurMax){
              partie.isStarted = true
              adminchannel.send(new Discord.MessageEmbed()
              .setDescription("Vous pouvez maintenant distribuer les rôles!")
              .setColor(color))
            } 
          }else{
            reaction.message.channel.send(new Discord.MessageEmbed()
            .setDescription(`<@${reactor.id}>, la partie est déjà commencée, vous pouvez tout de même **spectate** avec des **yeux**`)
            .setColor(color)).then((sent) => {
              setTimeout(function () {
                sent.delete();
              }, 5000);
            });
          }  
        }else{
          reaction.message.channel.send(new Discord.MessageEmbed()
          .setDescription(`<@${reactor.id}>, tu es god.`)
          .setColor(color)).then((sent) => {
            setTimeout(function () {
              sent.delete();
            }, 5000);
          });
        }
      }else{
        reaction.message.channel.send(new Discord.MessageEmbed()
          .setDescription(`<@${reactor.id}>, vous faites déjà partie de la partie!`)
          .setColor(color)).then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 5000);
        });
      }
    }else if(reaction.emoji == eyesId){
      if(!reactor.serverRoles.includes(vivant)){
        reactor.user.roles.add(spec)
        listeSpect.push(reactoradd)
      }else{
        reaction.message.channel.send(new Discord.MessageEmbed()
          .setDescription(`<@${reactor.id}>, vous ne pouvez pas **spectate** si vous faites **déjà** partie de la partie!`)
          .setColor(color)).then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 5000);
        });
      }
    }
  }

  else if(reaction.message.channel == adminchannel) {
    if(reaction.message.id != adminchannel.lastMessageID) return
    start = true
    if(partie.gamemode == "Classique 20 joueurs") {
      listerolechan.send(new Discord.MessageEmbed()
      .setTitle("Partie en cour: **Clasique 20 joueurs**")
      .setDescription(class20)
      .setColor(color))
    }else if(partie.gamemode == "Classique 15 joueurs") {
      listerolechan.send(new Discord.MessageEmbed()
      .setTitle("Partie en cour: **Classique 15 joueurs**")
      .setDescription(class15)
      .setColor(color))
    }else if(partie.gamemode == "All Any balanced") {
      listerolechan.send(new Discord.MessageEmbed()
      .setTitle("Partie en cour: **All any 15 joueurs**")
      .setDescription(any15)
      .setColor(color))
    }

    const reactionMessage = await qvjChan.send(messageJouer)
      await reactionMessage.react(turtleId)
      await reactionMessage.react(eyesId)
  }
})

bot.login(process.env.BOT_TOKEN)