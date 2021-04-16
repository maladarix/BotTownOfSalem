const Action = require('../../action')

class dis {
    constructor(){
        this.name = "Disguiser"
        this.description = "Vous êtes un maître du déguisement qui peut faire ressembler les autres à des personnes qu’ils ne sont pas."
        this.isUnique = false
        this.needsTwoTargets = true
        this.alignement = "Town protective"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Disguiser"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = dis