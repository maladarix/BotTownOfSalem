const Action = require('.../action.js')

class Maf {
    constructor(){
        this.name = "Mafioso"
        this.description = "Vous suivez les ordres du godfather."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Mafia Killing"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Mafioso"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = Maf