const Action = require('../../action')
class agent {
    constructor(){
        this.name = "Agent-Infiltré"
        this.description = "Vous êtes un habitant du village qui à gagné accès à des conversations entre mafieux."
        this.isUnique = true
        this.needsTwoTargets = null
        this.alignement = "Town Investigative"
        this.command = "---"
        this.priority = 0
        this.use = 0
        this.winwith = "Town, Survivants"
        this.hab = "Voir le chat de la mafia sans voir leurs noms."
        this.wikiLink = "Lien à venir. Demandez aux god"
        this.defense = 0
        this.attack = 0
    }
    
}

module.exports = agent