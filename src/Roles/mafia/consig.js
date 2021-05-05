const Action = require('../../action')

class consig {
    constructor(){
        this.name = "Conseiller"
        this.description = "Vous travaillez pour la mafia et vous utilisez vos talents d’investigateur."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Mafia Support"
        this.command = "investigate"
        this.priority = 4
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Consigliere"
        this.winwith = "Mafias, Sorcières, Survivants."
        this.hab = "Vous choisissez chaque nuit une cible et vous saurez leur rôle à la fin de celle-ci."
        this.defense = 0
        this.attack = 0
    }

    action(author, target){
        return new Action("investigate", author, target)
    }
}

module.exports = consig