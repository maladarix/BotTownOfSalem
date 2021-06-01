const Action = require('../../action')

class pira {
    constructor(){
        this.name = "Pirate"
        this.description = "Vous êtes un swashbuckler obsédé par l'or."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Neutral Chaos"
        this.command = "chose"
        this.priority = 1
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Pirate"
        this.winwith = "Tout le monde si tu as 2 kills"
        this.hab = `Lorsque vous pillez un joueur, vous vous battez contre le joueur pour ses objets de valeur. Si le joueur se défend contre votre attaque, vous n'obtenez aucun butin.`
        this.defense = 0
        this.attack = 4
    }

    action(author, target){
        return new Action("chose", author, target)
    }
}

module.exports = pira