const Action = require('../../action')

class dis {
    constructor(){
        this.name = "Disguiser"
        this.description = "Vous êtes un maître du déguisement qui peut faire ressembler les autres à des personnes qu’ils ne sont pas."
        this.isUnique = false
        this.needsTwoTargets = true
        this.alignement = "Town protective"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Disguiser"
        this.winwith = "Mafias, Sorcières, Survivants."
        this.hab = "Déguiser une membre de la mafia en un autre membre du village. Le membre de la mafia déguisé aura l'air d’avoir le rôle de la personne du village que vous avez choisi aux yeux des towns investigatives."
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = dis