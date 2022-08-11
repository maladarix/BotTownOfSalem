class Player {

    constructor(joueur){
        
        this.id = joueur.user.id
        this.interface = ""
        this.name = joueur.user.username
        this.displayname = (joueur.nickname) ? joueur.nickname : joueur.user.username
        this.serverRoles = joueur._roles
        this.role = null
        this.roleappear = null
        this.lastwillappear = null
        this.whispRemaining = 0
        this.hasVoted = false
        this.votesFor = 0
        this.registeredVote = null
        this.lastwill = null
        this.note = null
        this.action = null
        this.actiondone = false
        this.isroleblocked = false
        this.isjailed = false
        this.isAlert = false
        this.guarded = null
        this.healed = null
        this.blackmailed = false
        this.ambushed = null
        this.ambushDone = false
        this.isframed = false
        this.trans = null
        this.witch = null
        this.inac = 0
        this.scroll = null
        this.number = null
        this.necro = false
    }
}

module.exports = Player