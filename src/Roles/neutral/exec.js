const Action = require('../../action')

class exec {
    constructor(){
        this.name = "Executionner"
        this.description = "Vous êtes un bourreau obsédé qui ne reculera devant rien pour exécuter votre cible."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Neutral Evil"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Executioner"
        this.winwith = "Tout le monde sauf votre cible"
        this.hab = "Aucune"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = exec