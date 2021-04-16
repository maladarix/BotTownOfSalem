const Action = require('../../action')

class forger {
    constructor(){
        this.name = "Forger"
        this.description = "Votre rôle est de forger des identités aux autres joueurs en les visitant."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Mafia Deception"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Forger"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = forger