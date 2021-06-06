const Action = require('../../action')

class potion {
  constructor(){
    this.name = "Potion-Master"
    this.description = "Vous êtes un alchimiste expérimenté avec de puissantes recettes de potions."
    this.isUnique = true
    this.needsTwoTargets = false
    this.alignement = "Coven Evil"
    this.command = "visit"
    this.priority = 3 // 4 5
    this.wikiLink = "https://town-of-salem.fandom.com/wiki/Potion_Master"
    this.winwith = "Coven, Survivants."
    this.hab = "Vous pouvez choisir d'utiliser une potion de soin, de révélation ou d'attaque sur un joueur. Chaque potion a un temps de recharge de trois jours. Avec le Necromane, vos potions n'ont plus de temps de recharge."
    this.defense = 0
    this.attack = 1
  }

  action(author, target){
    return new Action("ambush", author, target)
  }
}

module.exports = potion