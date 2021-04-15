const Action = require('.../action.js')

class Jailor {
    constructor(){
        this.name = "Jailor"
        this.description = "Vous êtes un gardien de prison qui emprisonne secrètement des suspects."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Town Killing"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Jailor"
    }

    action(author, target){
        return new Action("Unstoppable Attack", author, target)
    }
} 

module.exports = Jailor