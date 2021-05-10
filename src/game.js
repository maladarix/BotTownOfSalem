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
        
    }
}

module.exports = Partie