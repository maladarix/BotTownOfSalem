const Action = require('../../action')

class Mayor {
    constructor(){
        this.name = "Maire"
        this.description = "Vous êtes une personne d’influence."
        this.isUnique = true
        this.needsTwoTargets = null
        this.alignement = "Town Support"
        this.command = "reveal"
        this.priority = 0
        this.isreveal = false
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/mayor"
        this.winwith = "Town, Survivants."
        this.hab = "Lorsque vous sentez que le moment est opportun, vous pourrez vous révéler comme maire et votre vote comptera triple. Cependant, vous deviendrez alors une cible de choix pour la mafia…"
        this.defense = 0
        this.attack = 0
    }

    action(author){
        return new Action("reveal", author)
    }

} 

module.exports = Mayor