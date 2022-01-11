const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI);

const URI = process.env.MONGODB_URI;

//const URI = 'mongodb://localhost/mebritdb';

mongoose.connect(URI, {
    useNewUrlParser: true,

});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});
