const Action = require('.../action.js')

class werewolf {
    constructor(){
        this.name = "Loup-garou"
        this.description = "Vous ressemblez à un villageois normal mais quand la pleine lune arrive vous vous transformez."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Neutral Killing"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Werewolf"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = werewolf