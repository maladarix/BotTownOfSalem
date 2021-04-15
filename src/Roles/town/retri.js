const Action = require('.../action.js')
class Retri {
    constructor(){
        this.name = "Retributionist"
        this.description = "Vous êtes une créature mythique qui a le pouvoir de ramener les morts à la vie."
        this.isUnique = true
        this.needsTwoTargets = true
        this.alignement = "Town Support"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Retributionist"
    }

    action(author, target){
        return
    }
}

module.exports = Retri