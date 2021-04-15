const Action = require('.../action.js')
class Transporteur {
    constructor(){
        this.name = "Transporteur"
        this.description = "Vous êtes quelqu’un qui déplace des personnes sans poser des questions."
        this.isUnique = false
        this.needsTwoTargets = true
        this.alignement = "Town Support"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Transporter"
    }

    action(author, target1, target2){
        return new Action("transport", author, target1, target2)
    }
}

module.exports = Transporteur