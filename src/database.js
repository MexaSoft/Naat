const mongoose = require('mongoose')

const { NAAT_APP_MONGODB_HOST, NAAT_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NAAT_APP_MONGODB_HOST}/${NAAT_APP_MONGODB_DATABASE}`;
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

.then(db => console.log('Conectado'))
.catch(err => console.log(err));