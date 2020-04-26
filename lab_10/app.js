const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const configRoutes = require('./routes');
const exphbs = require('express-handlebars');

app.use('/public', static);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(async (req, res, next) => {
    const currentTime = new Date().toUTCString();
    const requestMethod = req.method;
    const requestRoute = req.originalUrl;
    console.log(`[${currentTime}]: ${requestMethod} ${requestRoute}`);
    next();
});

app.use(
    session({
        name: 'AuthCookie',
        secret: 'some secret string!',
        resave: false,
        saveUninitialized: true,
    })
);

// app.use(async (req,res,next) => {
//     totalRequests++;
//     console.log(totalRequests);
//     req.cookies.user={id:1,userName:'wyq'};
//     console.log(req.cookies.user);
//     // console.log(req.session.id);
//     // console.log(req.session.name);
//     next();
// });

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3000');
});
