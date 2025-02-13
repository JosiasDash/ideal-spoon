// <> $
const express = require("express");
const env = require("dotenv");
const app = express();
env.config();

const port = process.env.API_PORT;

app.listen(port, function() {
    console.log(`MCP api is listening on port ${port}`);
})
