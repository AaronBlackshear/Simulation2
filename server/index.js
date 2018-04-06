require('dotenv').config();
const { json } = require('body-parser');
const cors = require('cors');
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const app = express();
express.static(__dirname + '../public');

app.use(cors());
app.use(json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000000
    }
}))

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db',db);
})
.catch(err => console.log(err));

app.get('/api/getHouses', ctrl.getHouses);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Hi I'm port ${port}!`))