const Discord = require('discord.js')
const Commands = require('./commands.js')
const bot = new Discord.Client();

class Player {

    constructor(joueur)
    {
        this.user = joueur
        this.id = joueur.id
        this.name = joueur.nickname
        this.role = null
        this.whispRemaining = 0
        this.hasVoted = false
        this.votesFor = 0
        this.registeredVote = null
    }


}

module.exports = Player