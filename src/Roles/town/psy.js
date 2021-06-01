const Action = require('../../action')

class psyc {
    constructor(){
        this.name = "Psychic"
        this.description = "Vous êtes un voyant puissant avec un don pour trouver ses secrets."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Investigative"
        this.command = "guard"
        this.priority = 4
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Psychic"
        this.winwith = "Town, Survivants."
        this.hab = "Les nuits impaires, vous aurez une vision de trois joueurs, au moins un sera maléfique. Les nuits paires, vous aurez une vision de deux joueurs, au moins un sera bon"
        this.defense = 0
        this.attack = 0
    }

    action(author, target){
        return new Action("guard", author, target)
    }
}

module.exports = psyc