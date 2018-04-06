require('dotenv').config();
const { json } = require('body-parser');
const cors = require('cors');
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const app = express();
express.static(__dirname + '../public');

const ctrl = require('./controller');

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db',db);
})
.catch(err => console.log(err));

app.use(cors());
app.use(json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000000,
    }
}))

app.use((req,res,next) => {
    if(!req.session.user){
        req.session.user = []
    }
    next();
})


app.get('/api/getHouses', ctrl.getHouses);
app.post('/api/addHouse', ctrl.addHouse);
app.delete('/api/deleteHouse/:id', ctrl.deleteHouse);
app.post('/api/addFav', ctrl.addFavorite);
app.get('/api/search', ctrl.searchHouses);
app.put('/api/editHouse/:id', ctrl.editHouse);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Hi I'm port ${port}!`))