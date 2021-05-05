const Action = require('../../action')

class Maf {
    constructor(){
        this.name = "Mafioso"
        this.description = "Vous suivez les ordres du godfather."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Mafia Killing"
        this.command = "attack"
        this.priority = 5
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Mafioso"
        this.winwith = "Mafias, Sorcières, Survivants."
        this.hab = `Vous pouvez tuer la personne que le godfather vous ordonne de tuer. Vous pouvez discuter avec la mafia dans #mafia-chat
        Death note : Vous pouvez laisser un message sur le cadavre de votre victime. Simplement à écrire death note : « écrire la death note ici ».`
        this.defense = 0
        this.attack = 1
    }

    action(author, target){
        return new Action("attack", author, target)
    }
}

module.exports = Maf