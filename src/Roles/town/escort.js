const Action = require('../../action')

class Escort {
    constructor(){
        this.name = "Escorte"
        this.description = "Une belle femme qui utilise sa beauté pour distraire les autres."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town protective"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Escort"
    }

    action(author, target){
        return new Action("Roleblock", author, target)
    }
}

module.exports = Escort