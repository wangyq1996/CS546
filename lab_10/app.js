const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');
const session = require('express-session');
const cookieParser = require('cookie-parser');


const configRoutes = require('./routes');
const exphbs = require('express-handlebars');

app.use('/public', static);
app.use(cookieParser);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

let totalRequests = 0;

app.use(
    session({
        name: 'AuthCookie',
        secret: 'some secret string!',
        resave: false,
        saveUninitialized: true,
    })
);

app.use(async (req,res,next) => {
    console.log(req.cookies);
    totalRequests++;
    console.log(totalRequests);
    next();
});

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3000');
});
