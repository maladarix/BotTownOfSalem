const Action = require('../../action')
class Sherif {
    constructor(){
        this.name = "Sherif"
        this.description = "Vous êtes un membre des forces de l’ordre du village forcé de rester caché dû à des menaces de mort."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Investigative"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Sheriff"
    }

    action(author, target){
        return new Action("sherif", author, target)
    }
}

module.exports = Sherif