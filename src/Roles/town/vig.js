const Action = require('../../action')
class Vigilante {
    constructor(){
        this.name = "Vigilante"
        this.description = "Un policier activiste qui prend la justice dans ses propres mains."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Killing"
        this.command = "vigkill"
        this.priority = 5
        this.use = 3
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Vigilante"
        this.winwith = "Town, Survivant."
        this.hab = "Tuer une personne qui vous semble suspicieuse. Vous avez 3 balles pour toute la durée de la partie. Si vous tuez un villageois, vous vous sentirez coupable et mettrez fin à vos jours."
        this.defense = 0
        this.attack = 1
    }

    action(author, target){
        return new Action("vigkill", author, target)
    }
}

module.exports = Vigilante