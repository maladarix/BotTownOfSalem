const Action = require('../../action')
class Retri {
    constructor(){
        this.name = "Retributionist"
        this.description = "Vous êtes une créature mythique qui a le pouvoir de ramener les morts à la vie."
        this.isUnique = true
        this.needsTwoTargets = true
        this.alignement = "Town Support"
        this.command = "retribute"
        this.priority = 1
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Retributionist"
        this.winwith = "Town, Survivants."
        this.hab = "Chaque nuit, vous pouvez utiliser le corps d’un mort et effectuer son action à sa place. Vous ne pouvez utiliser chaque corps qu’une seule fois."
        this.defense = 0
        this.attack = 0
    }

    action(author, target1, target2){
        return new Action("retribute", author, target1, target2)
    }
}

module.exports = Retri