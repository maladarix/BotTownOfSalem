const Action = require('.../action.js')

class Jan {
    constructor(){
        this.name = "Consierge"
        this.description = "Vous travaillez pour la mafia et vous pouvez nettoyer des cadavres."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Mafia Deception"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Janitor"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = Jan