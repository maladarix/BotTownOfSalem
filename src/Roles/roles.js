const bg = require('./town/bg')
const doc = require('./town/doc')
const escort = require('./town/escort')
const invest = require('./town/invest')
const jailor = require('./town/jailor')
const lookout = require('./town/lookout')
const mayor = require('./town/mayor')
const retri = require('./town/retri')
const sheriff = require('./town/sheriff')
const spy = require('./town/spy')
const trans = require('./town/trans')
const vampHunter = require('./town/vampHunter')
const vet = require('./town/vet')
const vig = require('./town/vig')



class Roles{

    getBg(){
        return new bg()
    }

}

module.exports = Roles