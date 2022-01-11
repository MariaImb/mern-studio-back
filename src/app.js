const express = require('express');
const cors = require ('cors');

const app = express();

//SETTINGS

app.set('port', process.env.PORT || 4000);


//MIDELWARES
app.use(cors());
app.use(express.json());

//ROUTES
//app.use('/api/users', require('./routes/users'))
app.use('/api/contact', require('./routes/contact'))



module.exports = app;