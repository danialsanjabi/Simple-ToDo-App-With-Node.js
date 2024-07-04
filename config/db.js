const mongoose = require('mongoose');

module.exports = function(){
    mongoose
        .connect(process.env.DB_URL, { dbName: process.env.DB_NAME })
        .then(() => console.log('connected to mongodb'))
        .catch(() => console.log('failed to connect to mongodb'));
}