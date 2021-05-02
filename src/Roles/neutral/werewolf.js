const Action = require('../../action')

class werewolf {
    constructor(){
        this.name = "Loup-garou"
        this.description = "Vous ressemblez à un villageois normal mais quand la pleine lune arrive vous vous transformez."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Neutral Killing"
        this.command = "attack"
        this.priority = 5
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Werewolf"
        this.winwith = "Survivants, Sorcières."
        this.hab = "Vous ravagez une maison par nuit. Ce qui tuera votre cible et tous ses visiteurs (attaque puissante)"
    }

    action(author, target){
        return new Action("attack", author, target)
    }
}

module.exports = werewolf