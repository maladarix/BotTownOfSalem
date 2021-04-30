const index = require('../index')
const Commands = require('./commands.js')

class Partie{

    constructor() {

        this.gamemode = null
        this.jour = 0
        this.isStarted = false
        this.listeroles = []
        this.personom = ""
        this.persoGm = []
        this.time = ""
        
    }
}

module.exports = Partie