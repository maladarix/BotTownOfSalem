const Action = require('.../action.js')

class surv {
    constructor(){
        this.name = "Survivor"
        this.description = "Vous êtes une personne totalement neutre qui a pour seul but sa propre survie."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Neutral Bening"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Survivor"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = surv