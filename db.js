const mongoose = require('mongoose');

const mongoUrI = 'mongodb://localhost:27017';

const ConnectToMongo = () =>{
    mongoose.connect(mongoUrI, ()=>{
        console.log('Connected to mongo succesful');
    })
}
module.exports = ConnectToMongo;