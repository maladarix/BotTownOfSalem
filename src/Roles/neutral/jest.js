const Action = require('../../action')

class jester {
    constructor(){
        this.name = "Jester"
        this.description = "Un lunatique qui a absolument perdu la carte pour qui son seul rêve est de se faire pendre sur la place publique."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Neutral Evil"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Jester"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = jester