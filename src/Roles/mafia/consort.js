const Action = require('../../action')

class consort {
    constructor(){
        this.name = "Consort"
        this.description = "Vous êtes une belle femme au service de la mafia."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Mafia Support"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Consort"
        this.winwith = "Mafias, Sorcières, Survivants."
        this.hab = "Distraire une personne pour l’empêcher d’effectuer son rôle."
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = consort