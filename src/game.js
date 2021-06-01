const index = require('../index')
const Commands = require('./commands.js')

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