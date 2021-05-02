const Action = require('../../action')

class forger {
    constructor(){
        this.name = "Forger"
        this.description = "Votre rôle est de forger des identités aux autres joueurs en les visitant."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Mafia Deception"
        this.command = "rewrite"
        this.priority = 3
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Forger"
        this.winwith = "Mafias, Sorcières, Survivants."
        this.hab = "Chaque nuit, vous pouvez forger une nouveau “Last Will” pour cette personne, si cette personne est tué, votre faux sera montré aux autres à la place du leur. Vous ne pouvez que créer deux faux “Last Will”"
    }

    action(author, target){
        return new Action("rewrite", author, target)
    }
}

module.exports = forger