const Action = require('../../action')

class medium {
    constructor(){
        this.name = "Medium"
        this.description = "Vous avez une capacité spéciale qui vous permet de parler aux morts."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Support"
        this.command = "lookout"
        this.priority = 0
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Medium"
        this.winwith = "Town, Survivants."
        this.hab = "Si vous êtes morts, vous pouvez choisir une cible vivante pour discuter."
        this.defense = 0
        this.attack = 0
        this.seanceUsed = false
    }

    action(author, target){
        return new Action("seance", author, target)
    }
} 

module.exports = medium