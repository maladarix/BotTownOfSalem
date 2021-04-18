const Action = require('../../action')
class Vigilante {
    constructor(){
        this.name = "Vigilante"
        this.description = "Un policier activiste qui prend la justice dans ses propres mains."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Killing"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Vigilante"
        this.winwith = "Town, Survivant."
        this.hab = "Tuer une personne qui vous semble suspicieuse. Vous avez 3 balles pour toute la durée de la partie. Si vous tuez un villageois, vous vous sentirez coupable et mettrez fin à vos jours."
    }

    action(author, target){
        return new Action("VigKill", author, target)
    }
}

module.exports = Vigilante