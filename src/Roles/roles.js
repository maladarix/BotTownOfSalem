const bg = require('./town/bg')
const doc = require('./town/doc')
const escort = require('./town/escort')
const invest = require('./town/invest')
const jailor = require('./town/jailor')
const lookout = require('./town/lookout')
const maire = require('./town/mayor')
const retri = require('./town/retri')
const sherif = require('./town/sherif')
const spy = require('./town/spy')
const trans = require('./town/trans')
const vampHunter = require('./town/vampHunter')
const vet = require('./town/vet')
const vig = require('./town/vig')



class Roles{

    getBg(){
        return new bg()
    }

    getDoc(){
        return new doc()
    }

    getEscort(){
        return new escort()
    }

    getInvest(){
        return new invest()
    }

    getJailor(){
        return new jailor()
    }

    getLoukout(){
        return new lookout()
    }

    getMaire(){
        return new maire()
    }

    getRetri(){
        return new retri()
    }

    getSheriff(){
        return new sherif()
    }

    getSpy(){
        return new spy()
    }

    getTrans(){
        return new trans()
    }

    getVampHunter(){
        return new vampHunter()
    }

    getVet(){
        return new vet()
    }

    getVig(){
        return new vig()
    }

}

module.exports = Roles