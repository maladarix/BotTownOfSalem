const Action = require('../../action')

class framer {
    constructor(){
        this.name = "Framer"
        this.description = "Vous êtes un maître du déguisement et de la mise en scène."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Mafia Deception"
        this.command = "frame"
        this.priority = 3
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Framer"
        this.winwith = "Mafias, Sorcières, Survivants."
        this.hab = "Set-up quelqu’un pour le rendre suspicieux aux yeux des enquêteurs."
        this.defense = 0
        this.attack = 0
    }

    action(author, target){
        return new Action("frame", author, target)
    }
}

module.exports = framer