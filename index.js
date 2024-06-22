require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT||5000;
const db = require("./config/mongoose");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api",require('./routes'));

app.listen(port, function(err) {
    if(err) {
        console.log(`Error : ${err}`);
        return;
    }

    console.log(`Server is running on port ${port}`);
});
