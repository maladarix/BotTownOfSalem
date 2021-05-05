const Action = require('../../action')
class Transporteur {
    constructor(){
        this.name = "Transporteur"
        this.description = "Vous êtes quelqu’un qui déplace des personnes sans poser des questions."
        this.isUnique = false
        this.needsTwoTargets = true
        this.alignement = "Town Support"
        this.command = "transport"
        this.priority = 1
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Transporter"
        this.winwith = "Town, Survivants."
        this.hab = "Inverser deux personnes afin d’inverser les attaques sur eux"
        this.defense = 0
        this.attack = 0
    }

    action(author, target1, target2){
        return new Action("transport", author, target1, target2)
    }
}

module.exports = Transporteur