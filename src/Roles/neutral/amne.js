const Action = require('../../action')

class amne {
    constructor(){
        this.name = "Amnésiac"
        this.description = "Vous êtes un patient de l’hôpital psychiatrique qui ne se rappelle pas qui il est."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Neutral Bening"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Amnesiac"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = amne