const Action = require('../../action')

class Mayor {
    constructor(){
        this.name = "Mayor"
        this.description = "Vous êtes une personne d’influence."
        this.isUnique = true
        this.needsTwoTargets = false
        this.alignement = "Town Support"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/mayor"
    }

} 

module.exports = Mayor