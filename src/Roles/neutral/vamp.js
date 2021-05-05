const Action = require('../../action')

class vamp {
    constructor(){
        this.name = "Vampire"
        this.description = "Vous êtes un mort vivant qui veut transformer les autres."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Neutral Chaos"
        this.command = "convert"
        this.priority = 5
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Vampire"
        this.winwith = "Vampires, Sorcières, Survivants."
        this.hab = "Vous votez pour mordre quelqu’un."
        this.defense = 0
        this.attack = 1
    }

    action(author, target){
        return new Action("convert", author, target)
    }
}

module.exports = vamp