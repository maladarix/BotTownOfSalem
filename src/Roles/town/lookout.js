const Action = require('../../action')

class Lookout {
    constructor(){
        this.name = "Lookout"
        this.description = "Vous êtes un observateur doté d’un œil de faucon qui campe discrètement à l’extérieur des maisons pour obtenir de l’information."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Town Investigative"
        this.command = "lookout"
        this.priority = 4
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/lookout"
        this.winwith = "Town, Survivants."
        this.hab = "Surveiller une personne chaque nuit afin de voir qui la visite"
        this.defense = 0
        this.attack = 0
    }

    action(author, target){
        return new Action("lookout", author, target)
    }
} 

module.exports = Lookout