const Action = require('../../action')
class Vigilante {
    constructor(){
        this.name = "Vigilante"
        this.description = "Un policier activiste qui prend la justice dans ses propres mains."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Killing"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Vigilante"
    }

    action(author, target){
        return new Action("VigKill", author, target)
    }
}

module.exports = Vigilante