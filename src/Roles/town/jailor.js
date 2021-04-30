const Action = require('../../action')

class Jailor {
    constructor(){
        this.name = "Jailor"
        this.description = "Vous êtes un gardien de prison qui emprisonne secrètement des suspects."
        this.isUnique = true
        this.needsTwoTargets = null
        this.alignement = "Town Killing"
        this.command = "execute, jail"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Jailor"
        this.winwith = "Town, Survivants."
        this.hab = "Discuter avec votre prisonnier (#jail) Votre prisonnier ne verra pas votre nom. Vous avez la possibilité d’exécuter votre prisonnier si vous n’êtes pas satisfait de sa défense. Cependant, si vous exécutez un villageois, vous ne pourrez plus jamais exécuter de prisonnier."
    }

    action(author, target){
        return new Action("execute", author, target)
    }
} 

module.exports = Jailor