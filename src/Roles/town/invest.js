class Invest {
    constructor(){
        this.name = "Investigator"
        this.description = "Vous êtes un enquêteur privé qui collecte de l’information en secret."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town investigative"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Investigator"
    }

    action(author, target){
        return
    }
}

module.exports = Invest