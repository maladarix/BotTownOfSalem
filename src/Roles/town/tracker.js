const Action = require('../../action')

class track {
    constructor(){
        this.name = "Tracker"
        this.description = "Vous êtes un traqueur expérimenté qui suivra sa proie vers n'importe quelle destination."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Investigative"
        this.command = "guard"
        this.priority = 3
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Tracker"
        this.winwith = "Town, Survivants."
        this.hab = "Suivez une personne la nuit pour voir à qui elle rend visite."
        this.defense = 0
        this.attack = 0
    }

    action(author, target){
        return new Action("guard", author, target)
    }
}

module.exports = track