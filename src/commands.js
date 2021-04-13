const Discord = require('discord.js');
const Partie = require('./game');
const bot = new Discord.Client();

let towninvest = ["Investigateurr", "Lookout", "Sheriff", "Spy"]
let townprotec = ["Bodyguard", "Doctor"]
let townsupport = ["Escort", "Maire", "Medium", "Retributioniste", "Transporteur"]
let townkilling = ["Jailor", "Vampire hunter", "Vétéran", "Vigilante"]

let mafiadeception = ["Disguiser", "Forger", "Framer", "Janitor", "Hypnotist"]
let mafiasupport = ["Blackmailer", "Conseiller", "Consort"]
let mafiakilling = ["Godfather", "Mafioso", "Ambusher"]

let neutralbening = ["Armnesiac", "Survivor"]
let neutralkilling = ["Arsonist", "Serial killer"]
let neutralevil = ["Executioner", "Jester", "ière"]
let neutralchaos = ["Vampire"]

let classique15 = ["Jailor", "Town investigative", "Town investigative", "Town protective", "Town killing", "Town support", "Random town", "Random town", "Godfather", "Mafioso", 
"Random mafia", "Neutral evil", "Neutral killing", "Any", "Any"]

let Allanyballenced15 = ["Random town", "Random town", "Random town", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any"]

let classique20 = ["Jailor", "Doctor", "Investigator", "Town investigative", "Town investigative", "Town support", "Town killing", "Random town", "Random town", "Random town",
"Vampire hunter", "Godfather", "Mafioso", "Random mafia", "Random mafia", "Vampire", "Neutral killing", "Neutral evil", "Any", "Any"]

class commands{
    
    start(partie, player) {
        console.log('not implemented lul')
    
        if(partie.gamemode == "Classique 20 joueurs") {
            classique20.forEach(role => {
                if(role == "Jailor") {

                }else if(role == "Doctor") {

                }else if(role == "Investigator") {

                }else if(role == "Town investigative") {
                    this.getTownInvest()
                }else if(role == "Town support") {
                    this.getTownSupport()
                }else if(role == "Town killing") {
                    this.getTownKilling()
                }else if(role == "Random town") {
                    this.getRandomTown
                }else if(role == "Vampire hunter") {

                }else if(role == "Godfather") {

                }else if(role == "Mafioso") {

                }else if(role == "Random mafia") {
                    this.getRandomMafia()
                }else if(role == "Vampire") {

                }else if(role == "Neutral killing") {
                    this.neutralkilling()
                }else if(role == "Neutral evil") {
                    this.getNeutralEvil()
                }else if(role == "Any") {
                    this.getAny()
                } else return
            });

        }else if(partie.gamemode == "Classique 15 joueurs") {
            classique15.forEach(role => {
                if(role == "Jailor") {

                }else if(role == "Town investigative") {
                    this.getTownInvest()
                }else if(role == "Town protective") {
                    this.getTownProtect()
                }else if(role == "Town killing") {
                    this.getTownKilling()
                }else if(role == "Town support") {
                    this.getTownSupport()
                }else if(role == "Random town") {
                    this.getRandomTown()
                }else if(role == "Godfather") {

                }else if(role == "Mafioso") {

                }else if(role == "Random mafia") {
                    this.getRandomMafia()
                }else if(role == "Neutral evil") {
                    this.getNeutralEvil()
                }else if(role == "Neutral killing") {
                    this.getNeutralKilling()
                }else if(role == "Any") {
                    this.getAny()
                }else return
            });
        }else if(partie.gamemode == "All Any balanced") {
            Allanyballenced15.forEach(role => {
                if(role == "Random town") {
                    this.getRandomTown()
                }else if(role == "Doctor") {
                    this.getAny()
                }else return
            });
        }
    }

    getTownInvest(){
        partie.aliveplayer
    }

    getTownProtect(){

    }

    getTownKilling(){

    }

    getTownSupport(){

    }

    getRandomTown(){

    }

    getRandomMafia(){

    }

    getNeutralEvil(){

    }

    getNeutralKilling(){

    }

    getNeutralChaos(){

    }

    getAny(){

    }
}

module.exports = commands