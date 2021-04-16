const Action = require('../../action')

class serialk {
    constructor(){
        this.name = "Serial Killer"
        this.description = "Vous vous faites passer pour un grand docteur de jour, mais de nuit, vous cherchez à mener tout le village dans un bain de sang."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Neutral Killing"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Serial_Kill"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = serialk