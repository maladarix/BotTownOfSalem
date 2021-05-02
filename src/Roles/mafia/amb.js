const Action = require('../../action')

class amb {
    constructor(){
        this.name = "Ambusher"
        this.description = "Un ancien Serial Killer qui suit maintenant les ordres de la mafia"
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Mafia Killing"
        this.command = "visit"
        this.priority = 1
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Ambusher"
        this.winwith = "Mafias, Sorcières, Survivants."
        this.hab = "Vous pouvez attendre à la porte de quelqu'un toutes les nuits. Vous allez attaquer une seule des personnes qui visitera votre cible, par contre, tous les visiteurs sauront votre nom."
    }

    action(author, target){
        return new Action("visit", author, target)
    }
}

module.exports = amb