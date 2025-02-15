const crypt = require("bcrypt");
const saltRound = 10;
const password = "Lucas-morel@2025";
const secret = "My Coding Pilot Secret";

const salt = crypt.genSaltSync(saltRound);
const hashedPassword = crypt.hashSync(password, salt);
console.log(hashedPassword);
const hashedSecret = crypt.hashSync(secret, salt);
console.log(hashedSecret);
