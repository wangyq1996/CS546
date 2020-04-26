const middleware = require('./middleware');

const constructorMethod = (app) => {
    app.use('/', middleware);
    app.use('*', (req, res) => {
        res.redirect('/');
    });
};

module.exports = constructorMethod;
