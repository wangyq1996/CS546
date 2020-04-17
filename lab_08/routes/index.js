const result = require('./result');

const constructorMethod = app =>{
    app.use("/", result);
    app.use("*",(req, res) => {
        res.sendStatus(404);
    });
}


module.exports = constructorMethod;