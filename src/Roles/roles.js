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
const Crusa = require('./town/crusa')
const Psyc = require('./town/psy')
const Tracker = require('./town/tracker')
const Trap = require('./town/trapper')

const amne = require('./neutral/amne')
const arso = require('./neutral/arso')
const exec = require('./neutral/exec')
const jest = require('./neutral/jest')
const serialk = require('./neutral/sk')
const surv = require('./neutral/surv')
const vamp = require('./neutral/vamp')
const werewolf = require('./neutral/werewolf')
const witch = require('./neutral/witch')
const GuardianA = require('./neutral/ga')
const Jugger = require('./neutral/jugger')
const Pirate = require('./neutral/pira')
const Plag = require('./neutral/plague')
const Pestilence = require('./neutral/pesti')

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

const covlead = require('./coven/covenlead')
const hex = require('./coven/hexMas')
const medu = require('./coven/medusa')
const necro = require('./coven/necro')
const poiso = require('./coven/poiso')
const potion = require('./coven/potion')


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

  getCrusa(){
    return new Crusa()
  }

  getPsy(){
    return new Psyc()
  }

  getTracker(){
    return new Tracker()
  }

  getTrapper(){
    return new Trap()
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

  getGuardian(){
    return new GuardianA()
  }

  getJugger(){
    return new Jugger()
  }

  getPira(){
    return new Pirate()
  }

  getPlague(){
    return new Plag()
  }

  getPesti(){
    return new Pestilence()
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

  getCovenlead(){
    return new covlead()
  }

  getHexmas(){
    return new hex()
  }

  getMedusa(){
    return new medu()
  }

  getNecro(){
    return new necro()
  }

  getPoiso(){
    return new poiso()
  }

  getPotion(){
    return new potion()
  }
  
}

module.exports = Roles