const crypt = require("bcrypt");
const env = require("dotenv");
const jwt = require("jsonwebtoken");
env.config();

const secret = process.env.TEST_SECRET;
const user = {
    email: "lucas.morel@test.com",
    password: process.env.TEST_PASSWORD
}

function checkPassword(password) {
    return crypt.compareSync(password, user.password);
}

function isValidEmail(email) {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(email);
}

function testLogin(body) {
    if (body.email == null || body.password == null) {
        return {
            code: 400,
            message: "Invalid credentials"
        }
    }
    if (!isValidEmail(body.email) || body.email != user.email) {
        return {
            code: 400,
            message: "Invalid email"
        }
    }
    if (!checkPassword(body.password)) {
        return {
            code: 400,
            message: "Invalid password",
        }
    }
    const token = jwt.sign(user, secret);
    return {
        code: 200,
        message: token
    }
}

module.exports = testLogin;
