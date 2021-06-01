const Action = require('../../action')

class plague {
    constructor(){
        this.name = "Plaguebearer"
        this.description = "Vous êtes un acolyte de la peste qui répand des maladies dans la ville."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Neutral Chaos"
        this.command = "chose"
        this.priority = 5
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Plaguebearer"
        this.winwith = "Plaguebearer, Survivants"
        this.hab = `Les joueurs ne sauront pas qu'ils ont été infectés. Lorsque tous les joueurs vivants sont infectés, vous devenez Pestilence.`
        this.defense = 1
        this.attack = 0
    }

    action(author, target){
        return new Action("chose", author, target)
    }
}

module.exports = plague