const mongoose = require('mongoose')
require('dotenv').config();

module.exports = {
  init: () => {
    const dbOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: false,
      poolSize: 5,
      connectTimeoutMS: 1000,
      family: 4
    };

    mongoose.connect(`mongodb+srv://Discordbot:${process.env.PASS}@cluster0.nbdig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, dbOptions);
    mongoose.set('useFindAndModify', false)
    mongoose.Promise = global.Promise

    mongoose.connection.on('connected', () => {
      console.log("Connecté à la database!")
    })

    mongoose.connection.on('disconnected', () => {
      console.log("Déconnecté de la database!")
    })

    mongoose.connection.on('err', (err) => {
      console.log("Erreur database" + err)
    })
  }
}