const Action = require('../../action')

class Mayor {
    constructor(){
        this.name = "Maire"
        this.description = "Vous êtes une personne d’influence."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Town Support"
        this.command = "reveal"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/mayor"
        this.winwith = "Town, Survivants."
        this.hab = "Lorsque vous sentez que le moment est opportun, vous pourrez vous révéler comme maire et votre vote comptera triple. Cependant, vous deviendrez alors une cible de choix pour la mafia…"
    }

    action(author){
        return new Action("reveal", author)
    }

} 

module.exports = Mayor