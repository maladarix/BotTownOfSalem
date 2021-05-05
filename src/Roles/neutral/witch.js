const Action = require('../../action')

class witch {
    constructor(){
        this.name = "Sorcière"
        this.description = "Vous êtes une sorcière qui contrôle les actions des autres."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Neutral Evil"
        this.command = "control"
        this.priority = 2
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Witch"
        this.winwith = "Mafias, Vampires, Sorcières, Survivants, Pyromanes, Serial killers, Loup-garou"
        this.hab = "Vous contrôlez une personne au choix chaque nuit."
        this.defense = 1
        this.attack = 0
    }

    action(author, target){
        return new Action("control", author, target)
    }
}

module.exports = witch