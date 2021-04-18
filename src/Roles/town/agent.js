const Action = require('../../action')
class agent {
    constructor(){
        this.name = "Agent infiltré"
        this.description = "Vous êtes un habitant du village qui à gagné accès à des conversations entre mafieux."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Town Investigative"
        this.wikiLink = ""
        this.winwith = "Town, Survivants"
        this.hab = "Voir le chat de la mafia sans voir leurs noms."
    }

    action(author, target){
        return new Action("VigKill", author, target)
    }
}

module.exports = agent