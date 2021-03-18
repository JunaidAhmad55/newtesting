let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', (err) => {

    if (!err) {
        console.log('db connected')
    } else {
        console.log(err);
    }

});