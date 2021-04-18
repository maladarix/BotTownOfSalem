const Action = require('../../action')
class vet {
    constructor(){
        this.name = "Vétéran"
        this.description = "Vous êtes un héros de guerre paranoïaque et vous tuerez ceux qui vous rendent visite au mauvais moment."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Town Killing"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Veteran"
        this.winwith = "Town, Survivants."
        this.hab = "Décidez si vous êtes en alerte ou non. Lorsque vous tuerez quiconque vous visitera. Vous pouvez être en alerte 3 fois dans la partie."
    }

    action(author, target){
        return new Action("OnAlert", author, target)
    }
}

module.exports = vet