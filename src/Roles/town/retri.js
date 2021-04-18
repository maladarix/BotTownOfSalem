const Action = require('../../action')
class Retri {
    constructor(){
        this.name = "Retributionist"
        this.description = "Vous êtes une créature mythique qui a le pouvoir de ramener les morts à la vie."
        this.isUnique = true
        this.needsTwoTargets = true
        this.alignement = "Town Support"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Retributionist"
        this.winwith = "Town, Survivants."
        this.hab = "Chaque nuit, vous pouvez utiliser le corps d’un mort et effectuer son action à sa place. Vous ne pouvez utiliser chaque corps qu’une seule fois."
    }

    action(author, target1, target2){
        return new Action("Retribute", author, target1, target2)
    }
}

module.exports = Retri