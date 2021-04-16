const bg = require('./town/bg')
const agent = require('./town/agent')
const doc = require('./town/doc')
const escort = require('./town/escort')
const invest = require('./town/invest')
const jailor = require('./town/jailor')
const lookout = require('./town/lookout')
const maire = require('./town/mayor')
const medium = require('./town/medium')
const retri = require('./town/retri')
const sherif = require('./town/sherif')
const spy = require('./town/spy')
const trans = require('./town/trans')
const vampHunter = require('./town/vampHunter')
const vet = require('./town/vet')
const vig = require('./town/vig')

const amne = require('./neutral/amne')
const arso = require('./neutral/arso')
const exec = require('./neutral/exec')
const jest = require('./neutral/jest')
const serialk = require('./neutral/sk')
const surv = require('./neutral/surv')
const vamp = require('./neutral/vamp')
const werewolf = require('./neutral/werewolf')
const witch = require('./neutral/witch')

const amb = require('./mafia/amb')
const blackmailer = require('./mafia/bm')
const consig = require('./mafia/consig')
const consort = require('./mafia/consort')
const dis = require('./mafia/dis')
const forger = require('./mafia/forger')
const framer = require('./mafia/framer')
const godfather = require('./mafia/gf')
const hypno = require('./mafia/hyp')
const jani = require('./mafia/jan')
const mafio = require('./mafia/maf')


class Roles{

    getBg(){
        return new bg()
    }

    getAgent(){
        return new agent()
    }

    getDoc(){
        return new doc()
    }

    getEscort(){
        return new escort()
    }

    getInvest(){
        return new invest()
    }

    getJailor(){
        return new jailor()
    }

    getLoukout(){
        return new lookout()
    }

    getMaire(){
        return new maire()
    }

    getMedium(){
        return new medium()
    }

    getRetri(){
        return new retri()
    }

    getSheriff(){
        return new sherif()
    }

    getSpy(){
        return new spy()
    }

    getTrans(){
        return new trans()
    }

    getVampHunter(){
        return new vampHunter()
    }

    getVet(){
        return new vet()
    }

    getVig(){
        return new vig()
    }

    getAmne(){
        return new amne()
    }

    getArso(){
        return new arso()
    }

    getExec(){
        return new exec()
    }

    getJester(){
        return new jest()
    }

    getSerialk(){
        return new serialk()
    }

    getSurv(){
        return new surv()
    }

    getVamp(){
        return new vamp()
    }

    getWerewolf(){
        return new werewolf()
    }

    getWitch(){
        return new witch()
    }

    getAmb(){
        return new amb()
    }

    getBlackmail(){
        return new blackmailer()
    }

    getConsig(){
        return new consig()
    }

    getConsort(){
        return new consort()
    }

    getDisg(){
        return new dis()
    }

    getForger(){
        return new forger()
    }

    getFramer(){
        return new framer()
    }

    getGodfather(){
        return new godfather()
    }

    getHypno(){
        return new hypno()
    }

    getJani(){
        return new jani()
    }

    getMafioso(){
        return new mafio()
    }
}

module.exports = Roles