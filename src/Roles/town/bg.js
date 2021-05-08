const Action = require('../../action')

class Bg {
    constructor(){
        this.name = "Bodyguard"
        this.description = "Vous êtes un ancien soldat qui gagne sa vie en secret en protégeant les gens."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Protective"
        this.command = "guard"
        this.priority = 3
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Bodyguard"
        this.winwith = "Town, Survivants."
        this.hab = "Protéger quelqu’un chaque nuit. Si cette personne est attaquée, vous tuerez l’assaillant, mais vous mourrez dans le combat vous aussi."
        this.defense = 0
        this.attack = 3
    }

    action(author, target){
        return new Action("guard", author, target)
    }
}

module.exports = Bg