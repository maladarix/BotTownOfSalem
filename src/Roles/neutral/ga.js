const Action = require('../../action')

class gardian {
    constructor(){
        this.name = "Guardian-Angel"
        this.description = "Vous êtes un ange dont le seul but est la protection de votre charge."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Neutral Bening"
        this.command = "chose"
        this.priority = 2
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Guardian_Angel"
        this.winwith = "Tout le monde si la target est vivante"
        this.hab = `Votre cible est XXXXXXX. Si votre cible est tuée, vous deviendrez un survivant sans gilets pare-balles. Deux fois par partie, vous pouvez guérir et purger votre cible. Cela peut être fait depuis la tombe. Surveiller un joueur ignore la prison.`
        this.defense = 0
        this.attack = 0
    }

    action(author, target){
        return new Action("chose", author, target)
    }
}

module.exports = gardian