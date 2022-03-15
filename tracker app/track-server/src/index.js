require('./models/userModel');
require('./models/Track');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('../src/routes/authRoutes');
const trackRoutes = require('../src/routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');
const mongoose = require('mongoose');
const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.ijpin.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on('connected', () => {
    console.log('connected to mongo instance')
});

mongoose.connection.on('error', (err) => {
    console.log('error in connecting to mongo ', err)
});
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

app.get('/', requireAuth, (req, res) => {
    res.send(req.user.email);
});

app.listen('3000', () => {
    console.log('Listening on port 3000')
});