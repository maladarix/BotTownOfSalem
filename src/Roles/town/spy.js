const Action = require('../../action')
class Spy {
    constructor(){
        this.name = "Spy"
        this.description = "Vous êtes un observateur aguerri qui reste à l'affût des moindre actions de la mafia."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Investigative"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Spy"
        this.winwith = "Town, Survivants."
        this.hab = "Vous pouvez voir le chat de la mafia (#spy-hideout), et vous voyez qui ils visitent. En plus, vous pouvez surveiller une maison par nuit."
    }

    action(author, target){
        return new Action("Bug", author, target)
    }
}

module.exports = Spy