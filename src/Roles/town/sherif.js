const Action = require('../../action')
class Sherif {
    constructor(){
        this.name = "Sheriff"
        this.description = "Vous êtes un membre des forces de l’ordre du village forcé de rester caché dû à des menaces de mort."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Investigative"
        this.command = "investigate"
        this.priority = 4
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Sheriff"
        this.winwith = "Town, Survivants."
        this.hab = "Enquêter sur une personne chaque nuit, à la recherche d’activité suspicieuse"
        this.defense = 0
        this.attack = 0
    }

    action(author, target){
        return new Action("sherif", author, target)
    }
}

module.exports = Sherif