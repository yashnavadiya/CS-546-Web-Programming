const express = require('express');
var session = require('express-session');
const app = express();
const static = express.static(__dirname + '/public');

const configRoutes = require('./routes');
const exphbs = require('express-handlebars');

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    name: 'AuthCookie',
    secret: 'some secret string!',
    resave: false,
    saveUninitialized: true
}))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(function (req, res, next) {
    var date = new Date().toUTCString()
    var method = req.method;
    var route = req.originalUrl;

    var check = (req.session.user) ? ' Authenticated User' : ' Non Authenticated User';
    console.log(`${date}` + " " + `${method}` + `${route}` + " " + `${check}`);
    next();
});

configRoutes(app);



app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3000');
});