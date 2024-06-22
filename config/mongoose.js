require('dotenv').config(); 
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE_URL);

const db = mongoose.connection;

db.on('error', console.log.bind(console, "Error connnecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to DataBse :: MongoDB ');
});

module.exports= db;