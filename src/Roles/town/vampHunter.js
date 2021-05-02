const Action = require('../../action')
class vampHunter {
    constructor(){
        this.name = "Vampire Hunter"
        this.description = "Vous cherchez à tout prix à tuer ces vilains vampires."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Killing"
        this.command = "huntvamp"
        this.priority = 5
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Vampire_Hunter"
        this.winwith = "Town, Survivants."
        this.hab = "Visiter une personne par nuit, si celle-ci est un vampire, vous tenterez de la tuer."
    }

    action(author, target){
        return new Action("huntvamp", author, target)
    }
}

module.exports = vampHunter