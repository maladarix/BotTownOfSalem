const Discord = require('discord.js')
const Commands = require('./commands.js')
const bot = new Discord.Client();

class Partie{

    constructor() {

        this.gamemode = null
        this.jour = 0
        this.isStarted = null
        this.aliveplayer = []
        
    }
}

module.exports = Partie