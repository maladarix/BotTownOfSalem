const Player = require('./player.js')
const index = require('./index.js')


let player = new Player()

var list1 = []
var list2 = []

list1.push(player)

list2.push(list1[0])

console.log(list1)
console.log(list2)

list2[0].hasVoted = true

console.log(list1)
console.log(list2)