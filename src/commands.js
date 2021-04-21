const Partie = require('./game');
const index = require('../index');
const roles = require('./Roles/roles')

let towninvest = [roles.prototype.getInvest(), roles.prototype.getLoukout(), roles.prototype.getSheriff(), roles.prototype.getAgent(), roles.prototype.getSpy()]
let townprotec = [roles.prototype.getBg(), roles.prototype.getDoc()]
let townsupport = [roles.prototype.getEscort(), roles.prototype.getMaire(), roles.prototype.getMedium(), roles.prototype.getRetri(), roles.prototype.getTrans()]
let townkilling = [roles.prototype.getVig(), roles.prototype.getVampHunter(), roles.prototype.getVet(), roles.prototype.getJailor()]

let randomtown = [roles.prototype.getInvest(), roles.prototype.getLoukout(), roles.prototype.getSheriff(), roles.prototype.getAgent(), roles.prototype.getSpy(),
    roles.prototype.getBg(), roles.prototype.getDoc(), roles.prototype.getEscort(), roles.prototype.getMaire(), roles.prototype.getMedium(), roles.prototype.getRetri(),
    roles.prototype.getTrans(), roles.prototype.getVig(), roles.prototype.getVampHunter(), roles.prototype.getVet(), roles.prototype.getJailor()]


let mafiadeception = [roles.prototype.getDisg(), roles.prototype.getForger(), roles.prototype.getFramer(), roles.prototype.getJani(), roles.prototype.getHypno()]
let mafiasupport = [roles.prototype.getBlackmail(), roles.prototype.getConsig(), roles.prototype.getConsort()]
let mafiakilling = [roles.prototype.getGodfather(), roles.prototype.getMafioso(), roles.prototype.getAmb()]

let randommafia = [roles.prototype.getDisg(), roles.prototype.getForger(), roles.prototype.getFramer(), roles.prototype.getJani(), roles.prototype.getHypno(),
    roles.prototype.getBlackmail(), roles.prototype.getConsig(), roles.prototype.getConsort(), roles.prototype.getGodfather(), roles.prototype.getMafioso(), roles.prototype.getAmb()]


let neutralbening = [roles.prototype.getAmne(), roles.prototype.getSurv()]
let neutralkilling = [roles.prototype.getArso(), roles.prototype.getSerialk(), roles.prototype.getWerewolf(),]
let neutralevil = [roles.prototype.getExec(), roles.prototype.getJester(), roles.prototype.getWitch()]
let neutralchaos = [roles.prototype.getVamp()]

let randomneutral = [roles.prototype.getAmne(), roles.prototype.getSurv(), roles.prototype.getArso(), roles.prototype.getSerialk(), roles.prototype.getExec(), roles.prototype.getJester(), 
    roles.prototype.getWitch(), roles.prototype.getVamp(), roles.prototype.getWerewolf()]


let anyrole = [roles.prototype.getInvest(), roles.prototype.getLoukout(), roles.prototype.getSheriff(), roles.prototype.getAgent(), roles.prototype.getSpy(), roles.prototype.getBg(), 
    roles.prototype.getDoc(), roles.prototype.getEscort(), roles.prototype.getMaire(), roles.prototype.getMedium(), roles.prototype.getRetri(), roles.prototype.getTrans(), 
    roles.prototype.getVig(), roles.prototype.getVampHunter(), roles.prototype.getVet(), roles.prototype.getWerewolf(), roles.prototype.getJailor(), roles.prototype.getDisg(), 
    roles.prototype.getForger(), roles.prototype.getFramer(), roles.prototype.getJani(), roles.prototype.getHypno(), roles.prototype.getBlackmail(), roles.prototype.getConsig(), 
    roles.prototype.getConsort(), roles.prototype.getGodfather(), roles.prototype.getMafioso(), roles.prototype.getAmb(), roles.prototype.getAmne(), roles.prototype.getSurv(), 
    roles.prototype.getArso(), roles.prototype.getSerialk(), roles.prototype.getExec(), roles.prototype.getJester(), roles.prototype.getWitch(), roles.prototype.getVamp()]

let classique15 = ["Jailor", "Town investigative", "Town investigative", "Town protective", "Town killing", "Town support", "Random town", "Random town", "Godfather", "Mafioso", 
"Random mafia", "Neutral evil", "Neutral killing", "Any", "Any"]

let Allanyballenced15 = ["Random town", "Random town", "Random town", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any", "Any"]

let classique20 = ["Jailor", "Doctor", "Investigateur", "Town investigative", "Town investigative", "Town support", "Town killing", "Random town", "Random town", "Random town",
"Vampire hunter", "Godfather", "Mafioso", "Random mafia", "Random mafia", "Vampire", "Neutral killing", "Neutral evil", "Any", "Any"]

let currentgamemode = []
let gameroles = []

let listerandom = []

class commands{
    
    start(partie, players) {
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
            }else return
        })

        partie.listeroles = gameroles
        function shuffle(array) {
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
        listerandom = shuffle(players)
        for (let index = 0; index < listerandom.length; index++) {
        listerandom[index].role = gameroles[index]
        }
    }

    getTownInvest(){
        gameroles.push(towninvest[Math.floor(Math.random() * towninvest.length)]) 
    }

    getTownProtect(){
        gameroles.push(townprotec[Math.floor(Math.random() * townprotec.length)])
    }

    getTownKilling(){
        let jai = false
        let good = false
        let element = null
        let randomtownkill = null

        for (let index = 0; index < gameroles.length; index++) {
            element = gameroles[index].name;
            if(element == "Jailor") {
                jai =true
            }
        }
        do{
            randomtownkill = townkilling[Math.floor(Math.random() * townkilling.length)]
            if(randomtownkill.name === "Jailor") {
                if(!jai) {
                    good = true
                }
            }else
                good = true
        }while (!good) {
        gameroles.push(randomtownkill)
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
        let age = false
        let good = false
        let element = null
        let randomtownroletown = null

        for (let index = 0; index < gameroles.length; index++) {
            element = gameroles[index].name;
            if(element == "Jailor") {
                jai = true
            }if(element == "Vétéran") {
                vet = true
            }if(element == "Maire") {
                mai = true
            }if(element == "Retributioniste") {
                ret = true
            }if(element == "Agent Infiltré") {
                age = true
            }
        }
        do{
            randomtownroletown = randomtown[Math.floor(Math.random() * randomtown.length)]
            if(randomtownroletown.name === "Jailor") {
                if(!jai) {
                    good = true
                }
            }else if(randomtownroletown.name === "Maire") {
                if(!mai) {
                    good = true
                }
            }else if(randomtownroletown.name === "Retributioniste") {
                if(!ret) {
                    good = true
                }
            }else if(randomtownroletown.name === "Vétéran") {
                if(!vet) {
                    good = true
                }
            }else if(randomtownroletown.name === "Agent Infiltré") {
                if(!age) {
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
            element = gameroles[index].name;
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
            if(randomtownrolemafia.name === "Godfather") {
                if(!god) {
                    good = true
                }
            }else if(randomtownrolemafia.name === "Mafioso") {
                if(!maf) {
                    good = true
                }
            }else if(randomtownrolemafia.name === "Ambusher") {
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
        gameroles.push(roles.prototype.getJailor())
    }

    getGodfather(){
        gameroles.push(roles.prototype.getGodfather())
    }

    getMafioso(){
        gameroles.push(roles.prototype.getMafioso())
    }

    getDoctor(){
        gameroles.push(roles.prototype.getDoc())
    }

    getInvestigateur(){
        gameroles.push(roles.prototype.getInvest())
    }

    getVampireHunter(){
        gameroles.push(roles.prototype.getVampHunter())
    }

    getVampire(){
        gameroles.push(roles.prototype.getVamp())
    }

    getAny(){
        let vet = false
        let mai = false
        let ret = false
        let agi = false
        let jai = false
        let god = false
        let maf = false
        let amb = false
        let good = false
        let element = null
        let any = null

        for (let index = 0; index < gameroles.length; index++) {
            element = gameroles[index].name;
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
            }if(element == "Agent infiltré") {
                agi = true
            }
        }
        do{
            any = anyrole[Math.floor(Math.random() * anyrole.length)]
            if(any.name === "Godfather") {
                if(!god) {
                    good = true
                }
            }else if(any.name === "Mafioso") {
                if(!maf) {
                    good = true
                }
            }else if(any.name === "Ambusher") {
                if(!amb) {
                    good = true
                }
            }else if(any.name === "Jailor") {
                if(!jai) {
                    good = true
                }
            }else if(any.name === "Maire") {
                if(!mai) {
                    good = true
                }
            }else if(any.name === "Retributioniste") {
                if(!ret) {
                    good = true
                }
            }else if(any.name === "Vétéran") {
                if(!vet) {
                    good = true
                }
            }else if(any.name === "Agnet infiltré") {
                if(!agi) {
                    good = true
                }
            }else
                good = true
        }while (!good)
        gameroles.push(any)
    }
}

module.exports = commands