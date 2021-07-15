const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const CORS_OPTINS = { origin: "http://localhost:4200" };
app.use(cors(CORS_OPTINS));
app.use(express.json());
//parse request of Content-Type:application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//sync with database
const DB = require("./db/models");
DB.sequelize.sync();
//simple route
app.get("/", (req, resp) => {
    resp.json({ message: "Welcome to express server!" });
});
require("./app.route")(app);
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/app  listening`);
});