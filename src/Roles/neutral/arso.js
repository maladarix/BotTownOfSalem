const Action = require('../../action')

class arso {
    constructor(){
        this.name = "Arsonist"
        this.description = "Vous êtes un pyromane qui veut faire brûler tout le monde."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Neutral Killing"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Arsonist"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = arso