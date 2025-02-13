// <> $
const express = require("express");
const env = require("dotenv");
const app = express();
const db = require("./config/db");
env.config();

const port = process.env.API_PORT;

app.listen(port, function() {
    console.log(`MCP api is listening on port ${port}`);
})
