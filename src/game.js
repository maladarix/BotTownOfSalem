const Discord = require('discord.js')
const Commands = require('./commands.js')
const bot = new Discord.Client();

class Partie{

    constructor(game) {

        this.gamemode = null
        this.jour = 0
        this.isStarted = null
        
    }
}

module.exports = Partie