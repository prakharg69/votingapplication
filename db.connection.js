const mongoose =require('mongoose');

const mongoDbUrl ='mongodb+srv://prakhargussain2006:Vijaya130306@voting.v1laq.mongodb.net/';
mongoose.connect(mongoDbUrl);

const db =mongoose.connection;

db.on('error',()=>{
    console.log('mongoDb connection error');
})

db.once('open',()=>{
    console.log('mongoDb conncect hogya hai');
})

module.exports = db;
