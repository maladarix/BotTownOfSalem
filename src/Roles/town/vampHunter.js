const Action = require('.../action.js')
class vampHunter {
    constructor(){
        this.name = "Spy"
        this.description = "Vous cherchez à tout prix à tuer ces vilains vampires."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Killing"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Vampire_Hunter"
    }

    action(author, target){
        return
    }
}

module.exports = vampHunter