const index = require('../index')
const Commands = require('./commands.js')
const roles = require('./Roles/roles');

class Partie{

    constructor() {

        this.gamemode = null
        this.isStarted = false
        this.listeroles = []
        this.personom = ""
        this.persoGm = []
        this.time = "nuit"
        this.fullmoon = false
        this.coven = false
    }
}

module.exports = Partie

/*
roles.prototype.getJailor()
this.scroll = [{player : "bob", role: "jailor"}, {player : "jean", role: "jailor"}]
let scrollJailor = []
let joueurChoisit = ""

scrolls.forEach(scroll => {
if(scroll.role == "jailor")
{
scrollJailor.push(scroll.player)
}
})

if(scrollJailor.length > 1)
{
    joueurChoisit = scrollJailor[Math.floor(Math.random() * scrollJailor.length)]
}





*/