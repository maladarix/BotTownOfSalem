const Action = require('../../action')

class Escort {
    constructor(){
        this.name = "Escorte"
        this.description = "Une belle femme qui utilise sa beauté pour distraire les autres."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town support"
        this.command = "roleblock"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Escort"
        this.winwith = "Town, Survivants."
        this.hab = "Distraire une personne pour l’empêcher d’effectuer son rôle."
    }

    action(author, target){
        return new Action("roleblock", author, target)
    }
}

module.exports = Escort