const Discord = require('discord.js')
const bot = new Discord.Client();

class Player {

    constructor(joueur)
    {
        this.user = joueur
        this.id = joueur.id
        this.name = joueur.nickname
        this.role = notAssigned
        this.whispRemaining = 0
        this.hasVoted = false
    }



}