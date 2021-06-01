const Action = require('../../action')

class pesti {
    constructor(){
        this.name = "Pestilence"
        this.description = "Vous êtes un cavalier de l'apocalypse qui se nourrit de maladies."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Neutral Chaos"
        this.command = "chose"
        this.priority = 5
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Pestilence"
        this.winwith = "Pertilence, Survivants"
        this.hab = `Vous attaquerez quiconque vous visitera ou visitera votre cible. Vous ne pouvez pas être bloqué ou contrôlé par un rôle. Si vous êtes emprisonné, vous attaquerez le geôlier.`
        this.defense = 5
        this.attack = 3
    }

    action(author, target){
        return new Action("chose", author, target)
    }
}

module.exports = pesti