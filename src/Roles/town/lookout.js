const Action = require('../../action')

class Lookout {
    constructor(){
        this.name = "Lookout"
        this.description = "Vous êtes un observateur doté d’un œil de faucon qui campe discrètement à l’extérieur des maisons pour obtenir de l’information."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Town Investigative"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/lookout"
        this.winwith = "Town, Survivants."
        this.hab = "Surveiller une personne chaque nuit afin de voir qui la visite"
    }

    action(author, target){
        return new Action("Lookout", author, target)
    }
} 

module.exports = Lookout