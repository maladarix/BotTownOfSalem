const Action = require('../../action')

class serialk {
    constructor(){
        this.name = "Serial Killer"
        this.description = "Vous vous faites passer pour un grand docteur de jour, mais de nuit, vous cherchez à mener tout le village dans un bain de sang."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Neutral Killing"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Serial_Kill"
        this.winwith = "Serial killers, Survivants, Sorcières"
        this.hab = "Chaque nuit, vous pouvez visiter d’autres villageois pour les tuer. Si quelqu’un vous role block, vous ferez d’une pierre deux coups et tuerez la personne qui vous role block en plus de votre cible."
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = serialk