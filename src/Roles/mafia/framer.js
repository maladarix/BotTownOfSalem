const Action = require('../../action')

class framer {
    constructor(){
        this.name = "Framer"
        this.description = "Vous êtes un maître du déguisement et de la mise en scène."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Mafia Deception"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Framer"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = framer