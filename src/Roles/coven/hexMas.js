const Action = require('../../action')

class hexMas {
  constructor(){
    this.name = "Hex-Master"
    this.description = "Vous êtes un lanceur de sorts avec une maîtrise des sorts et des malédictions."
    this.isUnique = true
    this.needsTwoTargets = false
    this.alignement = "Coven Evil"
    this.command = "visit"
    this.priority = 1
    this.wikiLink = "https://town-of-salem.fandom.com/wiki/Hex_Master"
    this.winwith = "Coven, Survivants."
    this.hab = "Vous pouvez choisir de Hexer un joueur chaque nuit."
    this.defense = 0
    this.attack = 4
  }

  action(author, target){
    return new Action("ambush", author, target)
  }
}

module.exports = hexMas