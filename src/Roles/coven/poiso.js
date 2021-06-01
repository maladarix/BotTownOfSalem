const Action = require('../../action')

class poiso {
  constructor(){
    this.name = "Poisoner"
    this.description = "Vous êtes un tueur patient avec une connaissance des poisons."
    this.isUnique = true
    this.needsTwoTargets = false
    this.alignement = "Coven Evil"
    this.command = "visit"
    this.priority = 5
    this.wikiLink = "https://town-of-salem.fandom.com/wiki/Poisoner"
    this.winwith = "Coven, Survivants."
    this.hab = "Vous pouvez choisir d'empoisonner un joueur chaque nuit."
    this.defense = 0
    this.attack = 1
  }

  action(author, target){
    return new Action("ambush", author, target)
  }
}

module.exports = poiso