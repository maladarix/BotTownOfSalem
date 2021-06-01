const Action = require('../../action')

class jugger {
    constructor(){
        this.name = "Juggernaut"
        this.description = "Vous êtes une force imparable qui ne fait que se renforcer à chaque mise à mort."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Neutral Killing"
        this.command = "chose"
        this.priority = 5
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Juggernaut"
        this.winwith = "Juggernaut, Survivants"
        this.hab = `Avec chaque tuer, vos pouvoirs grandissent. (0 à 2 victimes)
        Vous avez atteint votre puissance ultime. (3 victimes)
        Vous pouvez (maintenant) attaquer tous les soirs. (1er meurtre)
        Vous (maintenant) Rampage lorsque vous attaquez. (2e mise à mort)
        Vous ignorez désormais tous les effets qui protégeraient un joueur. (3e mise à mort)`
        this.defense = 1
        this.attack = 3
    }

    action(author, target){
        return new Action("chose", author, target)
    }
}

module.exports = jugger