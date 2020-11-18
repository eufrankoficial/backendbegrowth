const mongoose = require('mongoose');

module.exports = {
    connectToDatabase () {
        mongoose.connect('mongodb://db:27017/begrowth', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(result => {
            // Connected
        })
        .catch(error => {
            //error
        });
        ;
    }
}