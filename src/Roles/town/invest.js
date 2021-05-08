const Action = require('../../action')

class Invest {
    constructor(){
        this.name = "Investigator"
        this.description = "Vous êtes un enquêteur privé qui collecte de l’information en secret."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Investigative"
        this.command = "invest"
        this.priority = 4
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Investigator"
        this.winwith = "Town et Survivants."
        this.hab = "Enquête sur une personne chaque nuit afin d’avoir un indice sur son rôle."
        this.defense = 0
        this.attack = 0
    }

    action(author, target){
        return new Action("invest", author, target)
    }
}

module.exports = Invest