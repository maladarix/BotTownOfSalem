const Action = require('../../action')

class hyp {
    constructor(){
        this.name = "Hypnotiseur"
        this.description = "Vous travaillez pour la mafia et pouvez distribuer de faux messages aux personnes choisies."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Mafia Deception"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Hypnotist"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = hyp