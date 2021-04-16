const Action = require('.../action.js')

class amb {
    constructor(){
        this.name = "Ambusher"
        this.description = "Un ancien Serial Killer qui suit maintenant les ordres de la mafia"
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Madia Killing"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Ambusher"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = amb