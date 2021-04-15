const Partie = require('./game');
const index = require('../index');

let towninvest = ["Investigateur", "Lookout", "Sheriff", "Spy"]
let townprotec = ["Bodyguard", "Doctor"]
let townsupport = ["Escort", "Maire", "Medium", "Retributioniste", "Transporteur"]
let townkilling = ["Vigilante", "Vampire hunter", "Vétéran", "Jailor"]//                                                                                  roles uniques
let randomtown = ["Investigateur", "Lookout", "Sheriff", "Spy", "Bodyguard", "Doctor", "Escort", "Vigilante", "Medium", "Vampire hunter", "Transporteur", "Jailor", "Retributioniste",
 "Vétéran", "Maire"]

let mafiadeception = ["Disguiser", "Forger", "Framer", "Janitor", "Hypnotist"]
let mafiasupport = ["Blackmailer", "Conseiller", "Consort"]
let mafiakilling = ["Godfather", "Mafioso", "Ambusher"]
let randommafia = ["Disguiser", "Forger", "Framer", "Janitor", "Hypnotist", "Blackmailer", "Conseiller", "Consort", "Godfather", "Mafioso", "Ambusher"]

let neutralbening = ["Armnesiac", "Survivor"]
let neutralkilling = ["Arsonist", "Serial killer"]
let neutralevil = ["Executioner", "Jester"]
let neutralchaos = ["Vampire"]
let randomneutral = ["Armnesiac", "Survivor", "Arsonist", "Serial killer", "Executioner", "Jester", "Vampire"]

let anyrole = ["Investigateur", "Lookout", "Sheriff", "Spy", "Bodyguard", "Doctor", "Escort", "Vigilante", "Medium", "Vampire hunter", "Transporteur", "Jailor", "Retributioniste", "Vétéran",
 "Maire","Disguiser", "Forger", "Framer", "Janitor", "Hypnotist", "Blackmailer", "Conseiller", "Consort", "Godfather", "Mafioso", "Ambusher", "Armnesiac", "Survivor", "Arsonist",
  "Serial killer", "Executioner", "Jester", "Vampire"]

let classique15 = ["Jailor", "Town investigative", "Town investigative", "Town protective", "Town killing", "Town support", "Random town", "Random town", "Godfather", "Mafioso", 
"Random mafia", "Neutral evil", "Neutral killing", "Any", "Any"]

let Allanyballenced15 = ["Random town", "Random town", "Random town", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any"]

let classique20 = ["Jailor", "Doctor", "Investigateur", "Town investigative", "Town investigative", "Town support", "Town killing", "Random town", "Random town", "Random town",
"Vampire hunter", "Godfather", "Mafioso", "Random mafia", "Random mafia", "Vampire", "Neutral killing", "Neutral evil", "Any", "Any"]

let currentgamemode = []
let gameroles = []

let listerandom = []

class commands{
    
    start(partie) {
        gameroles = []
        if(partie.gamemode == "Classique 20 joueurs") {
            currentgamemode = classique20
        }else if(partie.gamemode == "Classique 15 joueurs") {
            currentgamemode = classique15
        }else if(partie.gamemode == "All Any balanced") {
            currentgamemode = Allanyballenced15
        }else return
        
        currentgamemode.forEach(role => {
            if(role == "Jailor") {
                this.getJailor()
            }else if(role == "Doctor") {
                this.getDoctor()
            }else if(role == "Investigateur") {
                this.getInvestigateur()
            }else if(role == "Town investigative") {
                this.getTownInvest()
            }else if(role == "Town support") {
                this.getTownSupport()
            }else if(role == "Town killing") {
                this.getTownKilling()
            }else if(role == "Town protective") {
                this.getTownProtect()
            }else if(role == "Random town") {
                this.getRandomTown()
            }else if(role == "Vampire hunter") {
                this.getVampireHunter()
            }else if(role == "Godfather") {
                this.getGodfather()
            }else if(role == "Mafioso") {
                this.getMafioso()
            }else if(role == "Random mafia") {
                this.getRandomMafia()
            }else if(role == "Vampire") {
                this.getVampire()
            }else if(role == "Neutral killing") {
                this.getNeutralKilling()
            }else if(role == "Neutral evil") {
                this.getNeutralEvil()
            }else if(role == "Any") {
                this.getAny()
            } else return
        })

        partie.listeroles = gameroles
        listerandom = index.alive().sort(() => Math.random() - 0.5)
        
        for (let index = 0; index < listerandom.length; index++) {
        listerandom[index].role = gameroles[index]
            console.log(listerandom[index].name + listerandom[index].role)
        }
    }

    getTownInvest(){
        gameroles.push(towninvest[Math.floor(Math.random() * towninvest.length)]) 
    }

    getTownProtect(){
        gameroles.push(townprotec[Math.floor(Math.random() * townprotec.length)])
    }

    getTownKilling(){
        if(gameroles.includes("Jailor")) {
            gameroles.push(townkilling[Math.floor(Math.random() * (townkilling.length - 1))])
        }else{
            gameroles.push(townkilling[Math.floor(Math.random() * townkilling.length)])
        }

    }

    getTownSupport(){
        gameroles.push(townsupport[Math.floor(Math.random() * townsupport.length)])
    }

    getRandomTown(){
        let vet = false
        let mai = false
        let ret = false
        let jai = false
        let good = false
        let element = null
        let randomtownroletown = null

        for (let index = 0; index < gameroles.length; index++) {
            element = gameroles[index];
            if(element == "Jailor") {
                jai = true
            }if(element == "Vétéran") {
                vet = true
            }if(element == "Maire") {
                mai = true
            }if(element == "Retributioniste") {
                ret = true
            }
        }
        do{
            randomtownroletown = randomtown[Math.floor(Math.random() * randomtown.length)]
            if(randomtownroletown === "Jailor") {
                if(!jai) {
                    good = true
                }
            }else if(randomtownroletown === "Maire") {
                if(!mai) {
                    good = true
                }
            }else if(randomtownroletown === "Retributioniste") {
                if(!ret) {
                    good = true
                }
            }else if(randomtownroletown === "Vétéran") {
                if(!vet) {
                    good = true
                }
            }else
                good = true
        }while (!good)
        gameroles.push(randomtownroletown)
    }

    getRandomMafia(){
        let god = false
        let maf = false
        let amb = false
        let good = false
        let element = null
        let randomtownrolemafia = null

        for (let index = 0; index < gameroles.length; index++) {
            element = gameroles[index];
            if(element == "Godfather") {
                god = true
            }if(element == "Mafioso") {
                maf = true
            }if(element == "Ambusher") {
                amb = true
            } 
        }
        do{
            randomtownrolemafia = randommafia[Math.floor(Math.random() * randommafia.length)]
            if(randomtownrolemafia === "Godfather") {
                if(!god) {
                    good = true
                }
            }else if(randomtownrolemafia === "Mafioso") {
                if(!maf) {
                    good = true
                }
            }else if(randomtownrolemafia === "Ambusher") {
                if(!amb) {
                    good = true
                }
            }else
                good = true
        }while (!good)
        gameroles.push(randomtownrolemafia)
    }

    getNeutralEvil(){
        gameroles.push(neutralevil[Math.floor(Math.random() * neutralevil.length)])
    }

    getNeutralKilling(){
        gameroles.push(neutralkilling[Math.floor(Math.random() * neutralkilling.length)])
    }

    getNeutralChaos(){

    }

    getJailor(){
        gameroles.push("Jailor")
    }

    getGodfather(){
        gameroles.push("Godfather")
    }

    getMafioso(){
        gameroles.push("Mafioso")
    }

    getDoctor(){
        gameroles.push("Doctor")
    }

    getInvestigateur(){
        gameroles.push("Investigateur")
    }

    getVampireHunter(){
        gameroles.push("Vampire Hunter")
    }

    getVampire(){
        gameroles.push("Vampire")
    }

    getAny(){
        let vet = false
        let mai = false
        let ret = false
        let jai = false
        let god = false
        let maf = false
        let amb = false
        let good = false
        let element = null
        let any = null

        for (let index = 0; index < gameroles.length; index++) {
            element = gameroles[index];
            if(element == "Godfather") {
                god = true
            }if(element == "Mafioso") {
                maf = true
            }if(element == "Ambusher") {
                amb = true
            }if(element == "Jailor") {
                jai = true
            }if(element == "Vétéran") {
                vet = true
            }if(element == "Maire") {
                mai = true
            }if(element == "Retributioniste") {
                ret = true
            }
        }
        do{
            any = anyrole[Math.floor(Math.random() * anyrole.length)]
            if(any === "Godfather") {
                if(!god) {
                    good = true
                }
            }else if(any === "Mafioso") {
                if(!maf) {
                    good = true
                }
            }else if(any === "Ambusher") {
                if(!amb) {
                    good = true
                }
            }else if(any === "Jailor") {
                if(!jai) {
                    good = true
                }
            }else if(any === "Maire") {
                if(!mai) {
                    good = true
                }
            }else if(any === "Retributioniste") {
                if(!ret) {
                    good = true
                }
            }else if(any === "Vétéran") {
                if(!vet) {
                    good = true
                }
            }else
                good = true
        }while (!good)
        gameroles.push(any)
    }
}

module.exports = commands