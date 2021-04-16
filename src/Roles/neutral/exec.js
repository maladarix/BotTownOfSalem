const Action = require('.../action.js')

class exec {
    constructor(){
        this.name = "Executionner"
        this.description = "Vous êtes un bourreau obsédé qui ne reculera devant rien pour exécuter votre cible."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Neutral Evil"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Executioner"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = exec