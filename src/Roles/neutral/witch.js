const Action = require('.../action.js')

class witch {
    constructor(){
        this.name = "Sorcière"
        this.description = "Vous êtes une sorcière qui contrôle les actions des autres."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Neutral Evil"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Witch"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = witch