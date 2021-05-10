const Action = require('../../action')

class Blackmailer {
    constructor(){
        this.name = "Blackmailer"
        this.description = "Vous travaillez pour la mafia et vous utilisez le chantage à votre avantage."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Mafia Support"
        this.command = "blackmail"
        this.priority = 3
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Blackmailer"
        this.winwith = "Mafias, Sorcières, Survivants."
        this.hab = "Choisissez une cible par nuit qui ne pourra pas discuter durant la journée."
        this.defense = 0
        this.attack = 0
    }

    action(author, target){
        return new Action("blackmail", author, target)
    }
}

module.exports = Blackmailer