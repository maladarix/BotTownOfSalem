const Action = require('.../action.js')
class Spy {
    constructor(){
        this.name = "Spy"
        this.description = "Vous êtes un observateur aguerri qui reste à l'affût des moindre actions de la mafia."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Investigative"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Spy"
    }

    action(author, target){
        return new Action("Bug", author, target)
    }
}

module.exports = Spy