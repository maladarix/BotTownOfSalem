const Action = require('../../action')

class covlead {
  constructor(){
    this.name = "Coven Leader"
    this.description = "Vous êtes un maître vaudou qui peut contrôler les actions des autres."
    this.isUnique = true
    this.needsTwoTargets = false
    this.alignement = "Coven Evil"
    this.command = "visit"
    this.priority = 1
    this.wikiLink = "https://town-of-salem.fandom.com/wiki/Coven_Leader"
    this.winwith = "Coven, Survivants."
    this.hab = "You may choose to Control someone each night."
    this.defense = 0
    this.attack = 0
  }

  action(author, target){
    return new Action("ambush", author, target)
  }
}

module.exports = covlead