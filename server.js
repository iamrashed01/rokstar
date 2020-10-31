const startupDebugger = require('debug')('app:startupDebugger');
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const app = express();

const hero = require('./routes/hero');
const about = require('./routes/about');
const users = require('./routes/users');
const auth = require('./routes/auth');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/hero', hero);
app.use('/api/about', about);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    startupDebugger(`Listening on port ${port}...`)
    mongoose.connect(config.get('db'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        .then(() => startupDebugger('Connected to MongoDB...'))
        .catch(err => startupDebugger('Could not connect to MongoDB...', err));
});