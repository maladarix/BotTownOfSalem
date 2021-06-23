const Action = require('../../action')

class crusa {
    constructor(){
        this.name = "Crusader"
        this.description = "Vous êtes un protecteur divin dont les compétences au combat sont inégalées."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Protective"
        this.command = "guard"
        this.priority = 3
        this.use = 0
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Crusader"
        this.winwith = "Town, Survivants."
        this.hab = "Accordez à votre cible une défense puissante. Vous saurez si votre cible est attaquée. Vous attaquez une personne qui visite votre cible la même nuit. Vous n'attaquez pas les vampires, mais vous bloquez leurs attaques."
        this.defense = 0
        this.attack = 1
    }

    action(author, target){
        return new Action("guard", author, target)
    }
}

module.exports = crusa