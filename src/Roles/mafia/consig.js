const Action = require('../../action')

class consig {
    constructor(){
        this.name = "Conseiller"
        this.description = "Vous travaillez pour la mafia et vous utilisez vos talents d’investigateur."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Mafia Support"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Consigliere"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = consig