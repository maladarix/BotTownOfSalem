const Action = require('../../action')

class necro {
  constructor(){
    this.name = "Necromancien"
    this.description = "Vous êtes une sorcière maléfique qui a une rancune contre la ville."
    this.isUnique = true
    this.needsTwoTargets = false
    this.alignement = "Coven Evil"
    this.command = "visit"
    this.priority = 1
    this.wikiLink = "https://town-of-salem.fandom.com/wiki/Necromancer"
    this.winwith = "Coven, Survivants."
    this.hab = "Vous pouvez réanimer un joueur mort et utiliser sa capacité sur un joueur."
    this.defense = 0
    this.attack = 0
  }

  action(author, target){
    return new Action("ambush", author, target)
  }
}

module.exports = necro