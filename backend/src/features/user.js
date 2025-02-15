// <>
const express = require("express");
const app = express();
const {login_required} = require("../config/middleware");

app.get("/user/", login_required, function(req, res) {
    res.json({
        message: "User data",
        user: req.user
    })
})

module.exports = app;
