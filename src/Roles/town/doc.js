class Doc {
    constructor(){
        this.name = "Docteur"
        this.description = "Vous êtes un chirurgien qui prend soin des personnes en secret."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town protective"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Doctor"
    }

    action(author, target){
        return
    }
}

module.exports = Doc