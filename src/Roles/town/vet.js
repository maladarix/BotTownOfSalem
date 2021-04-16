const Action = require('../../action')
class vet {
    constructor(){
        this.name = "Vétéran"
        this.description = "Vous êtes un héros de guerre paranoïaque et vous tuerez ceux qui vous rendent visite au mauvais moment."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Town Killing"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Veteran"
    }

    action(author, target){
        return new Action("OnAlert", author, target)
    }
}

module.exports = vet