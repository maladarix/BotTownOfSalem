const Partie = require('./game');
const index = require('../index');
const roles = require('./Roles/roles');
const gardian = require('./Roles/neutral/ga');

let towninvest = [roles.prototype.getInvest(), roles.prototype.getLoukout(), roles.prototype.getSheriff(), roles.prototype.getAgent(), roles.prototype.getSpy()]
let towninvestCoven = [roles.prototype.getInvest(), roles.prototype.getLoukout(), roles.prototype.getSheriff(), roles.prototype.getAgent(), roles.prototype.getSpy(), roles.prototype.getPsy(), roles.prototype.getTracker()]
let townprotec = [roles.prototype.getBg(), roles.prototype.getDoc()]
let townprotecCoven = [roles.prototype.getBg(), roles.prototype.getDoc(), roles.prototype.getCrusa(), roles.prototype.getTrapper()]
let townsupport = [roles.prototype.getEscort(), roles.prototype.getMaire(), roles.prototype.getRetri(), roles.prototype.getTrans()]
let townkilling = [roles.prototype.getVig(), roles.prototype.getVet(), roles.prototype.getJailor()]

let randomtown = [roles.prototype.getInvest(), roles.prototype.getLoukout(), roles.prototype.getSheriff(), roles.prototype.getAgent(), roles.prototype.getSpy(),
  roles.prototype.getBg(), roles.prototype.getDoc(), roles.prototype.getEscort(), roles.prototype.getMaire(), roles.prototype.getRetri(),
  roles.prototype.getTrans(), roles.prototype.getVig(), roles.prototype.getVet(), roles.prototype.getJailor()]

let randomtownCoven = [roles.prototype.getInvest(), roles.prototype.getLoukout(), roles.prototype.getSheriff(), roles.prototype.getAgent(), roles.prototype.getSpy(),
  roles.prototype.getBg(), roles.prototype.getDoc(), roles.prototype.getEscort(), roles.prototype.getMaire(), roles.prototype.getRetri(),
  roles.prototype.getTrans(), roles.prototype.getVig(), roles.prototype.getVet(), roles.prototype.getJailor(), roles.prototype.getCrusa(), roles.prototype.getTrapper(), roles.prototype.getPsy(), roles.prototype.getTracker()]


let mafiadeception = [roles.prototype.getDisg(), roles.prototype.getForger(), roles.prototype.getFramer(), roles.prototype.getJani(), roles.prototype.getHypno()]
let mafiasupport = [roles.prototype.getBlackmail(), roles.prototype.getConsig(), roles.prototype.getConsort()]
let mafiakilling = [roles.prototype.getGodfather(), roles.prototype.getMafioso(), roles.prototype.getAmb()]

let randommafia = [roles.prototype.getDisg(), roles.prototype.getForger(), roles.prototype.getFramer(), roles.prototype.getJani(), roles.prototype.getHypno(),
  roles.prototype.getBlackmail(), roles.prototype.getConsig(), roles.prototype.getConsort(), roles.prototype.getGodfather(), roles.prototype.getMafioso(), roles.prototype.getAmb()]


let neutralbening = [roles.prototype.getAmne(), roles.prototype.getSurv()]
let neutralbeninCoven = [roles.prototype.getAmne(), roles.prototype.getSurv(), roles.prototype.getGuardian()]
let neutralkilling = [roles.prototype.getArso(), roles.prototype.getSerialk(), roles.prototype.getWerewolf()]
let neutralkillingCoven = [roles.prototype.getArso(), roles.prototype.getSerialk(), roles.prototype.getWerewolf(), roles.prototype.getJugger()]
let neutralevil = [roles.prototype.getExec(), roles.prototype.getJester(), roles.prototype.getWitch()]
let neutralchaos = [roles.prototype.getVamp()]
let neutralchaosCoven = [roles.prototype.getVamp(), roles.prototype.getPira(), roles.prototype.getPlague()]

let randomneutral = [roles.prototype.getAmne(), roles.prototype.getSurv(), roles.prototype.getArso(), roles.prototype.getSerialk(), roles.prototype.getExec(), roles.prototype.getJester(), 
  roles.prototype.getWitch(), roles.prototype.getWerewolf()]

let randomneutralCoven = [roles.prototype.getAmne(), roles.prototype.getSurv(), roles.prototype.getArso(), roles.prototype.getSerialk(), roles.prototype.getExec(), roles.prototype.getJester(), 
  roles.prototype.getWitch(), roles.prototype.getWerewolf(),  roles.prototype.getGuardian(), roles.prototype.getJugger(), roles.prototype.getPira(), roles.prototype.getPlague()]

let covenevil = [roles.prototype.getCovenlead(), roles.prototype.getHexmas(), roles.prototype.getMedusa(), roles.prototype.getNecro(), roles.prototype.getPoiso(), roles.prototype.getPotion()]


let anyrole = [roles.prototype.getInvest(),roles.prototype.getLoukout(), roles.prototype.getSheriff(), roles.prototype.getAgent(), roles.prototype.getSpy(), roles.prototype.getBg(), 
    roles.prototype.getDoc(), roles.prototype.getEscort(), roles.prototype.getMaire(), roles.prototype.getRetri(), roles.prototype.getTrans(), 
    roles.prototype.getVig(), roles.prototype.getVet(), roles.prototype.getWerewolf(), roles.prototype.getJailor(), roles.prototype.getDisg(), 
    roles.prototype.getForger(), roles.prototype.getFramer(), roles.prototype.getJani(), roles.prototype.getHypno(), roles.prototype.getBlackmail(), roles.prototype.getConsig(), 
    roles.prototype.getConsort(), roles.prototype.getGodfather(), roles.prototype.getMafioso(), roles.prototype.getAmb(), roles.prototype.getAmne(), roles.prototype.getSurv(), 
    roles.prototype.getArso(), roles.prototype.getSerialk(), roles.prototype.getExec(), roles.prototype.getJester(), roles.prototype.getWitch()]

let anycoven = [roles.prototype.getInvest(), roles.prototype.getLoukout(), roles.prototype.getSheriff(), roles.prototype.getAgent(), roles.prototype.getSpy(), roles.prototype.getBg(), 
    roles.prototype.getDoc(), roles.prototype.getEscort(), roles.prototype.getMaire(), roles.prototype.getRetri(), roles.prototype.getTrans(), 
    roles.prototype.getVig(), roles.prototype.getVet(), roles.prototype.getWerewolf(), roles.prototype.getJailor(), roles.prototype.getDisg(), 
    roles.prototype.getForger(), roles.prototype.getFramer(), roles.prototype.getJani(), roles.prototype.getHypno(), roles.prototype.getBlackmail(), roles.prototype.getConsig(), 
    roles.prototype.getConsort(), roles.prototype.getGodfather(), roles.prototype.getMafioso(), roles.prototype.getAmb(), roles.prototype.getAmne(), roles.prototype.getSurv(), 
    roles.prototype.getArso(), roles.prototype.getSerialk(), roles.prototype.getExec(), roles.prototype.getJester(), roles.prototype.getWitch(), roles.prototype.getCovenlead(),
    roles.prototype.getHexmas(), roles.prototype.getMedusa(), roles.prototype.getNecro(), roles.prototype.getPoiso(), roles.prototype.getPotion(), roles.prototype.getGuardian(),
    roles.prototype.getJugger(), roles.prototype.getPira(), roles.prototype.getPlague(), roles.prototype.getCrusa(), roles.prototype.getPsy(), roles.prototype.getTracker(),
    roles.prototype.getTrapper()]

//roles unique coven: pirate plaguebearer juggernaut (tout coven)
let currentgamemode = []
let gameroles = []
let listerandom = []

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

class commands{
  start(partie, players) {
    currentgamemode = partie.gamemode.list
    gameroles = []

    let scrolls = []
    players.forEach(player =>{
      if(player.scroll != null){
        scrolls.push({player : player, role : player.scroll, position : null})
      }
    })
    
    scrolls.forEach(x => {
      let found = null
      for(let i = 0; i < currentgamemode.length && found == null ; i++){
        if (x.role.name == currentgamemode[i]) {
          found = i
        }
      }
      for(let i = 0; i < currentgamemode.length && found == null ; i++){
        if (x.role.alignement == currentgamemode[i]) {
          found = i
        }
      }
      for(let i = 0; i < currentgamemode.length && found == null ; i++){
        let faction = x.role.alignement.split(" ")
        if ("Random" + faction[0] == currentgamemode[i]) {
          found = i
        }
      }
      for(let i = 0; i < currentgamemode.length && found == null ; i++){
        if ("Any" == currentgamemode[i]) {
          found = i
        }
      }
      currentgamemode[found] = x.role.name
      x.position = found
    })

    currentgamemode.forEach(role => {
    if(role == "Jailor") {
      this.getJailor()
    }else if(role == "Docteur") {
      this.getDoctor()
    }else if(role == "Investigateur") {
      this.getInvestigateur()
    }else if(role == "Town Investigative") {
      if(partie.coven == true) {
        this.getTownInvestCoven()
      }else{
        this.getTownInvest()
      }
    }else if(role == "Town Support") {
      this.getTownSupport()
    }else if(role == "Town Killing") {
      this.getTownKilling()
    }else if(role == "Town Protective") {
      if(partie.coven == true) {
        this.getTownProtectCoven()
      }else{
        this.getTownProtect()
      }
    }else if(role == "Random town") {
      if(partie.coven == true) {
        this.getRandomTownCoven()
      }else{
        this.getRandomTown()
      }
    }else if(role == "Mafia Deception") {
      this.getMafiaDeception()
    }else if(role == "Mafia Support") {
      this.getMafiaSupport()
    }else if(role == "Mafia Killing") {
        this.getMafiaKilling()
    }else if(role == "Neutral Benin") {
      if(partie.coven == true) {
        this.getNeutralBeninCoven()
      }else{
        this.getNeutralBenin() 
      }
    }else if(role == "Neutral Chaos") {
      if(partie.coven == true) {
        this.getNeutralChaosCoven()
      }else{
        this.getNeutralChaos()
      }
    }else if(role == "Random Neutral") {
      if(partie.coven == true) {
        this.getRandomNeutralCoven()
      }else{
        this.getRandomNeutral()
      }
    }else if(role == "Vampire-Hunter") {
    this.getVampireHunter()
    }else if(role == "Godfather") {
      this.getGodfather()
    }else if(role == "Mafioso") {
      this.getMafioso()
    }else if(role == "Random mafia") {
    this.getRandomMafia()
    }else if(role == "Vampire") {
      this.getVampire()
    }else if(role == "Neutral Killing") {
      if(partie.coven == true) {
        this.getNeutralKillingCoven()
      }else{
        this.getNeutralKilling()
      }
    }else if(role == "Neutral Evil") {
      this.getNeutralEvil()
    }else if(role == "Coven Evil") {
      this.getCovenEvil()
    }else if(role == "Any") {
      if (partie.coven == true) {
        this.getAnyCoven()
      }else{
        this.getAny()
      }
    }else if(role == "Lookout") {
      this.getLoukout()
    }else if(role == "Sherrif") {
      this.getSheriff()
    }else if(role == "Agent-Infiltré") {
      this.getAgent()
    }else if(role == "Spy") {
      this.getSpy()
    }else if(role == "Bodyguard") {
      this.getBodyguard()
    }else if(role == "Escort") {
      this.getEscort()
    }else if(role == "Maire") {
      this.getMaire()
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
    }else if(role == "Serial-Killer") {
      this.getSerialkiller()
    }else if(role == "Executionner") {
      this.getExecutionner()
    }else if(role == "Jester") {
      this.getJester()
    }else if(role == "Sorcière") {
      this.getWitch()
    }else if(role == "Coven-Leader") {
      this.getCovenlead()
    }else if(role == "Hex-Master") {
      this.getHexmas()
    }else if(role == "Meduse") {
      this.getMedusa()
    }else if(role == "Necromane") {
      this.getNecro()
    }else if(role == "Poisoner") {
      this.getPoiso()
    }else if(role == "Potion-Master") {
      this.getPotion()
    }else if(role == "Guardian-Angel") {
      his.getGuardian()
    }else if(role == "Juggernaut") {
      this.getJugger()
    }else if(role == "Pirate") {
      this.getPirate()
    }else if(role == "Plaguebearer") {
      this.getPlague()
    }else if(role == "Crusader") {
      this.getCrusa()
    }else if(role == "Psychic") {
      this.getPsy()
    }else if(role == "Tracker") {
      this.getTracker()
    }else if(role == "Trapper") {
      this.getTrapper()
    }else return
  })

  partie.listeroles = gameroles
  listerandom = shuffle(players)
  scrolls.forEach(x => {
    let t = null
    let pos = null
    for(let i = 0; i < listerandom.length && pos == null; i++){
      if (x.player == listerandom[i]) {
        pos = i
      }
    }
    t = listerandom[pos];
    listerandom[pos] = listerandom[x.position];
    listerandom[x.position] = t;
  })

  this.distributeRoles(partie)
  
  }

  distributeRoles(partie){
    for (let index = 0; index < listerandom.length; index++) {
      listerandom[index].role = partie.listeroles[index]
    }
  }

  getTownInvest(){
    let good = false
    let randomtowninvest = null
    do{
      randomtowninvest = shuffle(towninvest)[Math.floor(Math.random() * towninvest.length)]
      if(!(randomtowninvest.isUnique && gameroles.some(role => role.name === randomtowninvest.name))) {
        good = true
      }
    }while (!good)
    gameroles.push(randomtowninvest)
  }

  getTownInvestCoven(){
    let good = false
    let randomtowninvestCoven = null
    do{
      randomtowninvestCoven = shuffle(towninvestCoven)[Math.floor(Math.random() * towninvestCoven.length)]
      if(!(randomtowninvestCoven.isUnique && gameroles.some(role => role.name === randomtowninvestCoven.name))) {
        good = true
      }
    }while (!good)
    gameroles.push(randomtowninvestCoven)
  }

  getTownProtect(){
    gameroles.push(shuffle(townprotec)[Math.floor(Math.random() * townprotec.length)])
  }

  getTownProtectCoven(){
    gameroles.push(shuffle(townprotecCoven)[Math.floor(Math.random() * townprotecCoven.length)])
  }

  getTownKilling(){
    let good = false
    let randomtownkill = null
    do{
      randomtownkill = shuffle(townkilling)[Math.floor(Math.random() * townkilling.length)]
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
      randomtownsupport = shuffle(townsupport)[Math.floor(Math.random() * townsupport.length)]
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
      randomtownrole = shuffle(randomtown)[Math.floor(Math.random() * randomtown.length)]
      if(!(randomtownrole.isUnique && gameroles.some(role => role.name === randomtownrole.name)))
      {
          good = true
      }
    }while (!good)
    gameroles.push(randomtownrole)
  }

  getRandomTownCoven(){
    let good = false
    let randomtownrole = null
    do{
      randomtownrole = shuffle(randomtownCoven)[Math.floor(Math.random() * randomtownCoven.length)]
      if(!(randomtownrole.isUnique && gameroles.some(role => role.name === randomtownrole.name)))
      {
          good = true
      }
    }while (!good)
    gameroles.push(randomtownrole)
  }

  getMafiaDeception(){
    gameroles.push(shuffle(mafiadeception)[Math.floor(Math.random() * mafiadeception.length)])
  }

  getMafiaSupport(){
    gameroles.push(shuffle(mafiasupport)[Math.floor(Math.random() * mafiasupport.length)])
  }

  getMafiaKilling(){
    let good = false
    let randommafiakill = null
    do{
      randommafiakill = shuffle(mafiakilling)[Math.floor(Math.random() * mafiakilling.length)]
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
      randommafiarole = shuffle(randommafia)[Math.floor(Math.random() * randommafia.length)]
      if(!(randommafiarole.isUnique && gameroles.some(role => role.name === randommafiarole.name))) {
        good = true
      }
    }while (!good)
    gameroles.push(randommafiarole)
  }

  getNeutralEvil(){
    gameroles.push(shuffle(neutralevil)[Math.floor(Math.random() * neutralevil.length)])
  }

  getCovenEvil(){
    let good = false
    let randomCovenEvil = null
    do{
      randomCovenEvil = shuffle(covenevil)[Math.floor(Math.random() * covenevil.length)]
      if(!(randomCovenEvil.isUnique && gameroles.some(role => role.name === randomCovenEvil.name))) {
        good = true
      }
    }while (!good)
    gameroles.push(randomCovenEvil)
  }

  getNeutralKilling(){
    let good = false
    let randomneutralkill = null
    do{
      randomneutralkill = shuffle(neutralkilling)[Math.floor(Math.random() * neutralkilling.length)]
      if(!(randomneutralkill.isUnique && gameroles.some(role => role.name === randomneutralkill.name))) {
        good = true
      }
    }while (!good)
    gameroles.push(randomneutralkill)
  }

  getNeutralKillingCoven(){
    let good = false
    let randomneutralkill = null
    do{
      randomneutralkill = shuffle(neutralkillingCoven)[Math.floor(Math.random() * neutralkillingCoven.length)]
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
      randomneutralchaos = shuffle(neutralchaos)[Math.floor(Math.random() * neutralchaos.length)]
      if(!(randomneutralchaos.isUnique && gameroles.some(role => role.name === randomneutralchaos.name))) {
        good = true
      }
    }while (!good)
    gameroles.push(randomneutralchaos)
  }

  getNeutralChaosCoven(){
    let good = false
    let randomneutralchaos = null
    do{
      randomneutralchaos = shuffle(neutralchaosCoven)[Math.floor(Math.random() * neutralchaosCoven.length)]
      if(!(randomneutralchaos.isUnique && gameroles.some(role => role.name === randomneutralchaos.name))) {
        good = true
      }
    }while (!good)
    gameroles.push(randomneutralchaos)
  }

  getNeutralBenin(){
    gameroles.push(shuffle(neutralbening)[Math.floor(Math.random() * neutralbening.length)])
  }

  getNeutralBeninCoven(){
    gameroles.push(shuffle(neutralbeninCoven)[Math.floor(Math.random() * neutralbeninCoven.length)])
  }

  getRandomNeutral(){
    let good = false
    let neutral = null
    do{
      neutral = shuffle(randomneutral)[Math.floor(Math.random() * randomneutral.length)]
      if(!(neutral.isUnique && gameroles.some(role => role.name === neutral.name))) {
        good = true
      }
    }while (!good)
    gameroles.push(neutral)
  }

  getRandomNeutralCoven(){
    let good = false
    let neutral = null
    do{
      neutral = shuffle(randomneutralCoven)[Math.floor(Math.random() * randomneutralCoven.length)]
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
      any = shuffle(anyrole)[Math.floor(Math.random() * anyrole.length)]
      if(!(any.isUnique && gameroles.some(role => role.name === any.name))) {
        good = true
      }
    }while (!good)
    gameroles.push(any)
  }

  getAnyCoven(){
    let good = false
    let Any = null
    do{
      Any = shuffle(anycoven)[Math.floor(Math.random() * anycoven.length)]
      if(!(Any.isUnique && gameroles.some(role => role.name === Any.name))) {
        good = true
      }
    }while (!good)
    gameroles.push(Any)
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

  getExecutionner(){
    gameroles.push(roles.prototype.getExec())
  }

  getJester(){
    gameroles.push(roles.prototype.getJester())
  }

  getWitch(){
    gameroles.push(roles.prototype.getWitch())
  }

  getCovenlead(){
    if(gameroles.some(role => role.name == "Coven Leader")) {
      this.getCovenEvil()
    }else{
      gameroles.push(roles.prototype.getCovenlead())
    }
  }

  getHexmas(){
    if(gameroles.some(role => role.name == "Hex Master")) {
      this.getCovenEvil()
    }else{
      gameroles.push(roles.prototype.getHexmas())
    }
  }

  getMedusa(){
    if(gameroles.some(role => role.name == "Meduse")) {
      this.getCovenEvil()
    }else{
      gameroles.push(roles.prototype.getMedusa())
    }
  }

  getNecro(){
    if(gameroles.some(role => role.name == "Necromane")) {
      this.getCovenEvil()
    }else{
      gameroles.push(roles.prototype.getNecro())
    }
  }

  getPoiso(){
    if(gameroles.some(role => role.name == "Poisoner")) {
      this.getCovenEvil()
    }else{
      gameroles.push(roles.prototype.getPoiso())
    }
  }

  getPotion(){
    if(gameroles.some(role => role.name == "Potion Master")) {
      this.getCovenEvil()
    }else{
      gameroles.push(roles.prototype.getPotion())
    }
  }

  getGuardian(){
    gameroles.push(roles.prototype.getGuardian())
  }

  getJugger(){
    if(gameroles.some(role => role.name == "Juggernaut")) {
      this.getNeutralKillingCoven()
    }else{
      gameroles.push(roles.prototype.getJugger())
    }
  }

  getPirate(){
    if(gameroles.some(role => role.name == "Pirate")) {
      this.getNeutralChaosCoven()
    }else{
      gameroles.push(roles.prototype.getPira())
    }
  }

  getPlague(){
    if(gameroles.some(role => role.name == "Plaguebearer")) {
      this.getNeutralChaosCoven()
    }else{
      gameroles.push(roles.prototype.getPlague())
    }
  }

  getCrusa(){
    gameroles.push(roles.prototype.getCrusa())
  }

  getPsy(){
    gameroles.push(roles.prototype.getPsy())
  }

  getTracker(){
    gameroles.push(roles.prototype.getTracker())
  }

  getTrapper(){
    gameroles.push(roles.prototype.getTrapper())
  }
  
  getAllRoles(){
    return anycoven
  }
}


module.exports = commands