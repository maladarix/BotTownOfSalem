const Action = require('../../action')

class surv {
    constructor(){
        this.name = "Survivor"
        this.description = "Vous êtes une personne totalement neutre qui a pour seul but sa propre survie."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Neutral Bening"
        this.command = "guard"
        this.priority = 3
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Survivor"
        this.winwith = "Tout le monde"
        this.hab = "Équiper une veste pare balle qui vous donnera une défense de base. (Vous pouvez l’équiper 4 fois en tout)"
        this.defense = 0
        this.attack = 0
    }

    action(author, target){
        return new Action("guard", author, target)
    }
}

module.exports = surv