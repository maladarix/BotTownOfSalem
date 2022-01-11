const Action = require('../../action')

class Jan {
    constructor(){
        this.name = "Concierge"
        this.description = "Vous travaillez pour la mafia et vous pouvez nettoyer des cadavres."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Mafia Deception"
        this.command = "clean"
        this.priority = 3
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Janitor"
        this.winwith = "Mafias, Sorcières, Survivants."
        this.hab = "Choisissez qui vous nettoierai (limite de 3)."
        this.defense = 0
        this.attack = 0
    }

    action(author, target){
        return new Action("clean", author, target)
    }
}

module.exports = Jan