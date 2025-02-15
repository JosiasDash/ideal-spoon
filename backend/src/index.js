// <> $
const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const public = require("./features/public")
const user = require("./features/user");
const app = express();
const db = require("./config/db");
env.config();

const port = process.env.API_PORT;

app.use(cors({
    'origin': '*',
}))

app.use(public);
app.use(user);

app.listen(port, function() {
    console.log(`MCP api is listening on port ${port}`);
})
