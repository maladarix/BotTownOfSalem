const Action = require('../../action')

class Doc {
    constructor(){
        this.name = "Docteur"
        this.description = "Vous êtes un chirurgien qui prend soin des personnes en secret."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Protective"
        this.command = "heal"
        this.priority = 3
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Doctor"
        this.winwith = "Town, Survivants."
        this.hab = "Aller chez quelqu’un chaque nuit pour pouvoir le sauver s’il se fait attaquer. Vous pouvez aussi vous protéger vous-même, mais seulement 1 fois dans la partie."
        this.defense = 0
        this.attack = 0
    }

    action(author, target){
        return new Action("heal", author, target)
    }
}

module.exports = Doc