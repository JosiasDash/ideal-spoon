const express = require("express");
const app = express();
const testLogin = require("../utils/test");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.post("/signup", function(req, res) {

})

app.post("/login", function(req, res) {
    const response = testLogin(req.body);
    res.status(response.code).json({
        message: response.message
    });
})

module.exports = app;
