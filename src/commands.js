const Partie = require('./game');
const index = require('../index');
const roles = require('./Roles/roles')

let towninvest = [roles.prototype.getInvest(), roles.prototype.getLoukout(), roles.prototype.getSheriff(), roles.prototype.getAgent(), roles.prototype.getSpy()]
let townprotec = [roles.prototype.getBg(), roles.prototype.getDoc()]
let townsupport = [roles.prototype.getEscort(), roles.prototype.getMaire(), roles.prototype.getMedium(), roles.prototype.getRetri(), roles.prototype.getTrans()]
let townkilling = [roles.prototype.getVig(), roles.prototype.getVet(), roles.prototype.getJailor()]

let randomtown = [roles.prototype.getInvest(), roles.prototype.getLoukout(), roles.prototype.getSheriff(), roles.prototype.getAgent(), roles.prototype.getSpy(),
    roles.prototype.getBg(), roles.prototype.getDoc(), roles.prototype.getEscort(), roles.prototype.getMaire(), roles.prototype.getMedium(), roles.prototype.getRetri(),
    roles.prototype.getTrans(), roles.prototype.getVig(), roles.prototype.getVet(), roles.prototype.getJailor()]


let mafiadeception = [roles.prototype.getDisg(), roles.prototype.getForger(), roles.prototype.getFramer(), roles.prototype.getJani(), roles.prototype.getHypno()]
let mafiasupport = [roles.prototype.getBlackmail(), roles.prototype.getConsig(), roles.prototype.getConsort()]
let mafiakilling = [roles.prototype.getGodfather(), roles.prototype.getMafioso(), roles.prototype.getAmb()]

let randommafia = [roles.prototype.getDisg(), roles.prototype.getForger(), roles.prototype.getFramer(), roles.prototype.getJani(), roles.prototype.getHypno(),
    roles.prototype.getBlackmail(), roles.prototype.getConsig(), roles.prototype.getConsort(), roles.prototype.getGodfather(), roles.prototype.getMafioso(), roles.prototype.getAmb()]


let neutralbening = [roles.prototype.getAmne(), roles.prototype.getSurv()]
let neutralkilling = [roles.prototype.getArso(), roles.prototype.getSerialk(), roles.prototype.getWerewolf()]
let neutralevil = [roles.prototype.getExec(), roles.prototype.getJester(), roles.prototype.getWitch()]
let neutralchaos = []

let randomneutral = [roles.prototype.getAmne(), roles.prototype.getSurv(), roles.prototype.getArso(), roles.prototype.getSerialk(), roles.prototype.getExec(), roles.prototype.getJester(), 
    roles.prototype.getWitch(), roles.prototype.getWerewolf()]


let anyrole = [roles.prototype.getInvest(),roles.prototype.getLoukout(), roles.prototype.getSheriff(), roles.prototype.getAgent(), roles.prototype.getSpy(), roles.prototype.getBg(), 
    roles.prototype.getDoc(), roles.prototype.getEscort(), roles.prototype.getMaire(), roles.prototype.getMedium(), roles.prototype.getRetri(), roles.prototype.getTrans(), 
    roles.prototype.getVig(), roles.prototype.getVet(), roles.prototype.getWerewolf(), roles.prototype.getJailor(), roles.prototype.getDisg(), 
    roles.prototype.getForger(), roles.prototype.getFramer(), roles.prototype.getJani(), roles.prototype.getHypno(), roles.prototype.getBlackmail(), roles.prototype.getConsig(), 
    roles.prototype.getConsort(), roles.prototype.getGodfather(), roles.prototype.getMafioso(), roles.prototype.getAmb(), roles.prototype.getAmne(), roles.prototype.getSurv(), 
    roles.prototype.getArso(), roles.prototype.getSerialk(), roles.prototype.getExec(), roles.prototype.getJester(), roles.prototype.getWitch()]


let currentgamemode = []
let gameroles = []
let customgm = []

let listerandom = []

class commands{
    start(partie, players) {
        customgm = partie.persoGm
        gameroles = []
        currentgamemode = partie.gamemode.list
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
            }else if(role == "Mafia deception") {
                this.getMafiaDeception()
            }else if(role == "Mafia support") {
                this.getMafiaSupport()
            }else if(role == "Mafia killing") {
                this.getMafiaKilling()
            }else if(role == "Neutral benin") {
                this.getNeutralBenin()
            }else if(role == "Neutral chaos") {
                this.getNeutralChaos()
            }else if(role == "Random neutral") {
                this.getRandomNeutral()
            }else if(role == "Vampire-hunter") {
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
            }else if(role == "Lookout") {
                this.getLoukout()
            }else if(role == "Sherrif") {
                this.getSheriff()
            }else if(role == "Agent") {
                this.getAgent()
            }else if(role == "Spy") {
                this.getSpy()
            }else if(role == "Bodyguard") {
                this.getBodyguard()
            }else if(role == "Escort") {
                this.getEscort()
            }else if(role == "Maire") {
                this.getMaire()
            }else if(role == "Medium") {
                this.getMedium()
            }else if(role == "Retributionist") {
                this.getRetri()
            }else if(role == "Transporteur") {
                this.getTrans()
            }else if(role == "Vigilante") {
                this.getVig()
            }else if(role == "Veteran") {
                this.getVet()
            }else if(role == "Loup-garou") {
                this.getLoup()
            }else if(role == "Disguiser") {
                this.getDisg()
            }else if(role == "Forger") {
                this.getForger()
            }else if(role == "Framer") {
                this.getFramer()
            }else if(role == "Consierge") {
                this.getConsierg()
            }else if(role == "Hypnotiseur") {
                this.getHypno()
            }else if(role == "Blackmailer") {
                this.getBlackmailer()
            }else if(role == "conseiller") {
                this.getConseiller()
            }else if(role == "Consort") {
                this.getConsort()
            }else if(role == "Ambusher") {
                this.getAmbusher()
            }else if(role == "Amnesiac") {
                this.getAmnesiac()
            }else if(role == "Survivant") {
                this.getSurvivant()
            }else if(role == "Arsonist") {
                this.getArsonist()
            }else if(role == "Serial-killer") {
                this.getSerialkiller()
            }else if(role == "Bourreau") {
                this.getbourreau()
            }else if(role == "Jester") {
                this.getJester()
            }else if(role == "Sorcière") {
                this.getWitch()
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
        let good = false
        let randomtowninvest = null
        do{
            randomtowninvest = towninvest[Math.floor(Math.random() * towninvest.length)]
            if(!(randomtowninvest.isUnique && gameroles.some(role => role.name === randomtowninvest.name))) {
                good = true
            }
        }while (!good)
        gameroles.push(randomtowninvest)
    }

    getTownProtect(){
        gameroles.push(townprotec[Math.floor(Math.random() * townprotec.length)])
    }

    getTownKilling(){
        let good = false
        let randomtownkill = null
        do{
            randomtownkill = townkilling[Math.floor(Math.random() * townkilling.length)]
            if(!(randomtownkill.isUnique && gameroles.some(role => role.name === randomtownkill.name))) {
                good = true
            }
        }while (!good)
        gameroles.push(randomtownkill)
    }

    getTownSupport(){
        let good = false
        let randomtownsupport = null
        do{
            randomtownsupport = townsupport[Math.floor(Math.random() * townsupport.length)]
            if(!(randomtownsupport.isUnique && gameroles.some(role => role.name === randomtownsupport.name))) {
                good = true
            }
        }while (!good)
        gameroles.push(randomtownsupport)
    }

    getRandomTown(){
        let good = false
        let randomtownrole = null
        do{
            randomtownrole = randomtown[Math.floor(Math.random() * randomtown.length)]
            if(!(randomtownrole.isUnique && gameroles.some(role => role.name === randomtownrole.name)))
            {
                good = true
            }
        }while (!good)
        gameroles.push(randomtownrole)
    }

    getMafiaDeception(){
        gameroles.push(mafiadeception[Math.floor(Math.random() * mafiadeception.length)])
    }

    getMafiaSupport(){
        gameroles.push(mafiasupport[Math.floor(Math.random() * mafiasupport.length)])
    }

    getMafiaKilling(){
        let good = false
        let randommafiakill = null
        do{
            randommafiakill = mafiakilling[Math.floor(Math.random() * mafiakilling.length)]
            if(!(randommafiakill.isUnique && gameroles.some(role => role.name === randommafiakill.name))) {
                good = true
            }
        }while (!good)
        gameroles.push(randommafiakill)
    }

    getRandomMafia(){
        let good = false
        let randommafiarole = null
        do{
            randommafiarole = randommafia[Math.floor(Math.random() * randommafia.length)]
            if(!(randommafiarole.isUnique && gameroles.some(role => role.name === randommafiarole.name))) {
                good = true
            }
        }while (!good)
        gameroles.push(randommafiarole)
    }

    getNeutralEvil(){
        gameroles.push(neutralevil[Math.floor(Math.random() * neutralevil.length)])
    }

    getNeutralKilling(){
        let good = false
        let randomneutralkill = null
        do{
            randomneutralkill = neutralkilling[Math.floor(Math.random() * neutralkilling.length)]
            if(!(randomneutralkill.isUnique && gameroles.some(role => role.name === randomneutralkill.name))) {
                good = true
            }
        }while (!good)
        gameroles.push(randomneutralkill)
    }

    getNeutralChaos(){
        let good = false
        let randomneutralchaos = null
        do{
            randomneutralchaos = neutralchaos[Math.floor(Math.random() * neutralchaos.length)]
            if(!(randomneutralchaos.isUnique && gameroles.some(role => role.name === randomneutralchaos.name))) {
                good = true
            }
        }while (!good)
        gameroles.push(randomneutralchaos)
    }

    getNeutralBenin(){
        gameroles.push(neutralbening[Math.floor(Math.random() * neutralbening.length)])
    }

    getRandomNeutral(){
        let good = false
        let neutral = null
        do{
            neutral = randomneutral[Math.floor(Math.random() * randomneutral.length)]
            if(!(neutral.isUnique && gameroles.some(role => role.name === neutral.name))) {
                good = true
            }
        }while (!good)
        gameroles.push(neutral)
    }

    getAny(){
        let good = false
        let any = null
        do{
            any = anyrole[Math.floor(Math.random() * anyrole.length)]
            if(!(any.isUnique && gameroles.some(role => role.name === any.name))) {
               good = true
            }
        }while (!good)
        gameroles.push(any)
    }

    getJailor(){
        if(gameroles.some(role => role.name == "Jailor")) {
            this.getRandomTown()
        }else{
            gameroles.push(roles.prototype.getJailor())
        }
    }

    getGodfather(){
        if(gameroles.some(role => role.name == "Godfather")) {
            this.getRandomMafia()
        }else{
            gameroles.push(roles.prototype.getGodfather())
        }
    }

    getMafioso(){
        if(gameroles.some(role => role.name == "Mafioso")) {
            this.getRandomMafia()
        }else {
            gameroles.push(roles.prototype.getMafioso())   
        }
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

    getLoukout(){
        gameroles.push(roles.prototype.getLoukout())
    }

    getSheriff(){
        gameroles.push(roles.prototype.getSheriff())
    }

    getAgent(){
        if(gameroles.some(role => role.name == "Agent infiltré")) {
            this.getRandomTown()
        }else{
            gameroles.push(roles.prototype.getAgent())
        }
    }

    getSpy(){
        gameroles.push(roles.prototype.getSpy())
    }

    getBodyguard(){
        gameroles.push(roles.prototype.getBg())
    }

    getEscort(){
        gameroles.push(roles.prototype.getEscort())
    }

    getMaire(){
        if(gameroles.some(role => role.name == "Maire")) {
            this.getRandomTown()
        }else{
            gameroles.push(roles.prototype.getMaire())
        }
    }

    getMedium(){
        gameroles.push(roles.prototype.getMedium())
    }

    getRetri(){
        if(gameroles.some(role => role.name == "Retributionist")) {
            this.getRandomTown()
        }else{
            gameroles.push(roles.prototype.getRetri())
        }
    }

    getTrans(){
        gameroles.push(roles.prototype.getTrans())
    }

    getVig(){
        gameroles.push(roles.prototype.getVig())
    }

    getVet(){
        if(gameroles.some(role => role.name == "Vétéran")) {
            this.getRandomTown()
        }else{
            gameroles.push(roles.prototype.getVet())
        }
    }

    getLoup(){
        if(ggameroles.some(role => role.name == "Loup-garou")) {
            this.getRandomNeutral()
        }else{
            gameroles.push(roles.prototype.getWerewolf())
        }
    }

    getDisg(){
        gameroles.push(roles.prototype.getDisg())
    }

    getForger(){
        gameroles.push(roles.prototype.getForger())
    }

    getFramer(){
        gameroles.push(roles.prototype.getFramer())
    }

    getConsierg(){
        gameroles.push(roles.prototype.getJani())
    }

    getHypno(){
        gameroles.push(roles.prototype.getHypno())
    }

    getBlackmailer(){
        gameroles.push(roles.prototype.getBlackmail())
    }

    getConseiller(){
        gameroles.push(roles.prototype.getConsig())
    }

    getConsort(){
        gameroles.push(roles.prototype.getConsort())
    }

    getAmbusher(){
        if(gameroles.some(role => role.name == "Ambusher")) {
            this.getRandomMafia()
        }else{
            gameroles.push(roles.prototype.getAmb())
        }
    }

    getAmnesiac(){
        gameroles.push(roles.prototype.getAmne())
    }

    getSurvivant(){
        gameroles.push(roles.prototype.getSurv())
    }

    getArsonist(){
        gameroles.push(roles.prototype.getArso())
    }

    getSerialkiller(){
        gameroles.push(roles.prototype.getSerialk())
    }

    getbourreau(){
        gameroles.push(roles.prototype.getExec())
    }

    getJester(){
        gameroles.push(roles.prototype.getJester())
    }

    getWitch(){
        gameroles.push(roles.prototype.getWitch())
    }
}

module.exports = commands