const Action = require('../../action')

class medu {
  constructor(){
    this.name = "Meduse"
    this.description = "Vous êtes un monstre aux cheveux de serpent avec un regard de pierre."
    this.isUnique = true
    this.needsTwoTargets = false
    this.alignement = "Coven Evil"
    this.command = "visit"
    this.priority = 3
    this.wikiLink = "https://town-of-salem.fandom.com/wiki/Medusa"
    this.winwith = "Coven, Survivants."
    this.hab = "Vous pouvez choisir de regarder en pierre tous les visiteurs la nuit."
    this.defense = 0
    this.attack = 3
  }

  action(author, target){
    return new Action("ambush", author, target)
  }
}

module.exports = medu