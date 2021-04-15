const Commands = require('./commands.js')

class Player {

    constructor(joueur){
        
        this.user = joueur
        this.id = joueur.user.id
        this.name = joueur.user.username
        this.serverRoles = joueur._roles
        this.role = null
        this.whispRemaining = 0
        this.hasVoted = false
        this.votesFor = 0
        this.registeredVote = null
        this.lastwill = null
    }
}

module.exports = Player