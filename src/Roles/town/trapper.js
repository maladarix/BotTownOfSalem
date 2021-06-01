const Action = require('../../action')
const track = require('./tracker')

class trapper {
    constructor(){
        this.name = "Trapper"
        this.description = "Vous êtes un bûcheron intelligent, doué pour les pièges."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Protective"
        this.command = "guard"
        this.priority = 1
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Trapper"
        this.winwith = "Town, Survivants."
        this.hab = "Les pièges prennent une journée à construire. Les pièges peuvent être détruits en vous sélectionnant la nuit. Vous ne pouvez avoir qu'un seul Trap à la fois."
        this.defense = 0
        this.attack = 3
    }

    action(author, target){
        return new Action("guard", author, target)
    }
}

module.exports = trapper