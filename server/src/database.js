const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/university-students', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        family: 4
    })
    .then((db) => console.log('DB is connected'))
    .catch((err) => console.error(err));