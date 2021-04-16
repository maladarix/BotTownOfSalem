const Action = require('../../action')

class vamp {
    constructor(){
        this.name = "Vampire"
        this.description = "Vous êtes un mort vivant qui veut transformer les autres."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Neutral Chaos"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Vampire"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = vamp