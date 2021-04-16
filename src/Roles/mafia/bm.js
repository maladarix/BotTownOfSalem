const Action = require('.../action.js')

class Blackmailer {
    constructor(){
        this.name = "Blackmailer"
        this.description = "Vous travaillez pour la mafia et vous utilisez le chantage à votre avantage."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Mafia Support"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Blackmailer"
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = Blackmailer