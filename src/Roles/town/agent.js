const Action = require('../../action')
class agent {
    constructor(){
        this.name = "Agent infiltré"
        this.description = "Vous êtes un habitant du village qui à gagné accès à des conversations entre mafieux."
        this.isUnique = true
        this.needsTwoTargets = null
        this.alignement = "Town Investigative"
        this.command = null
        this.winwith = "Town, Survivants"
        this.hab = "Voir le chat de la mafia sans voir leurs noms."
        this.wikiLink = "Lien à venir. Demandez aux god"
    }
    
}

module.exports = agent