const Action = require('../../action')
class Spy {
    constructor(){
        this.name = "Spy"
        this.description = "Vous êtes un observateur aguerri qui reste à l'affût des moindre actions de la mafia."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Investigative"
        this.command = "bug"
        this.priority = 6
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Spy"
        this.winwith = "Town, Survivants."
        this.hab = "Vous pouvez “bug” la maison d’un joueur pour voir ce qui lui arrive cette nuit-là."
        this.defense = 0
        this.attack = 0
    }

    action(author, target){
        return new Action("bug", author, target)
    }
}

module.exports = Spy