const middleware = require('./middleware');

const constructorMethod = (app) => {
    app.use('/', middleware);
    app.use('*', (req, res) => {
        res.sendStatus(404);
    });
};

module.exports = constructorMethod;
