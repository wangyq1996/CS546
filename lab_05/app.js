const express = require("express");
const app = express();
const routes = require("./routes");

routes(app);

app.listen(3000, () => console.log("Starting server"));