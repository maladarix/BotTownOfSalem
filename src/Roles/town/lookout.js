const Action = require('../../action')

class Lookout {
    constructor(){
        this.name = "Lookout"
        this.description = "Vous êtes un observateur doté d’un œil de faucon qui campe discrètement à l’extérieur des maisons pour obtenir de l’information."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Town Killing"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/lookout"
    }

    action(author, target){
        return new Action("Lookout", author, target)
    }
} 

module.exports = Lookout