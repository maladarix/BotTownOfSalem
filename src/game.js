class Partie{

    constructor() {
        this.commencer = false
        this.gamemode = null
        this.isStarted = false
        this.listeroles = []
        this.personom = ""
        this.persoGm = []
        this.time = "nuit"
        this.fullmoon = false
        this.coven = false
        this.traitor = false
        this.HeureResults = ""
        this.whispersChannels = []
        this.whispmaire = []
        this.traitre = null
        this.jailed = ""
        this.killed = null
        this.interfaces = []
        this.joueurCoven = []
        this.numJour = -1
        this.numNuit = 0
        this.nbWhispJour = 1
        this.nbMsgWhisp = 40
    }
}

module.exports = Partie

/*
roles.prototype.getJailor()
this.scroll = [{player : "bob", role: "jailor"}, {player : "jean", role: "jailor"}]
let scrollJailor = []
let joueurChoisit = ""

scrolls.forEach(scroll => {
if(scroll.role == "jailor")
{
scrollJailor.push(scroll.player)
}
})

if(scrollJailor.length > 1)
{
    joueurChoisit = scrollJailor[Math.floor(Math.random() * scrollJailor.length)]
}





*/