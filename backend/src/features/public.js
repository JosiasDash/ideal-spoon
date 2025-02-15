const express = require("express");
const app = express();
const {testLogin, testSignup} = require("../utils/test");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.post("/signup", function(req, res) {
    const response =  testSignup(req.body);
    res.status(response.code).json({
        message: response.message
    })
})

app.post("/login", function(req, res) {
    const response = testLogin(req.body);
    res.status(response.code).json({
        message: response.message
    });
})

module.exports = app;
