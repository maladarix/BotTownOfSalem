const Action = require('../../action')

class arso {
    constructor(){
        this.name = "Arsonist"
        this.description = "Vous êtes un pyromane qui veut faire brûler tout le monde."
        this.isUnique = false
        this.needsTwoTargets = false
        this.alignement = "Neutral Killing"
        this.wikiLink = "https://town-of-salem.fandom.com/wiki/Arsonist"
        this.winwith = "Vous-même, vous devez être le seul survivant."
        this.priority = 3
        this.hab = "Chaque nuit, vous pouvez mettre de l’essence sur quelqu’un. Lorsque vous le voulez, vous pouvez décider de mettre le feu et toutes les personnes avec de l’essence mourront. Vous pouvez aussi vous nettoyer si vous le voulez."
        this.defense = 1
        this.attack = 3
    }

    action(author, target){
        return new Action("Guard", author, target)
    }
}

module.exports = arso