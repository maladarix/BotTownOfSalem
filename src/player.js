class Player {

    constructor(joueur){
        
        this.user = joueur
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
        this.trans = this
        this.witch = null
        this.mvp = 0
        this.inac = 0
        this.scroll = null
        this.scrollrecu = null
        this.number = null
    }
}

module.exports = Player