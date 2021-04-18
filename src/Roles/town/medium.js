const Action = require('../../action')

class medium {
    constructor(){
        this.name = "Medium"
        this.description = "Vous avez une capacité spéciale qui vous permet de parler aux morts."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Town Support"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Medium"
        this.winwith = "Town, Survivants."
        this.hab = "Si vous êtes morts, vous pouvez choisir une cible vivante pour discuter."
    }

    action(author, target){
        return new Action("Lookout", author, target)
    }
} 

module.exports = medium