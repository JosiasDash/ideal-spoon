const crypt = require("bcrypt");
const env = require("dotenv");
const jwt = require("jsonwebtoken");
env.config();
// <>

const secret = process.env.TEST_SECRET;
const user = {
    email: "lucas.morel@test.com",
    password: process.env.TEST_PASSWORD
}

const user1 = {
    "id": 1,
    "email": "lucas.morel@test.com",
    "username": "Lucas",
    "password": "Lucas-morel@2025",
    "global_rate": 2.1
}

const user2 = {
    "id": 2,
    "email": "julien.lefevre@test.com",
    "username": "Julien",
    "password": "Julien-lefevre@2025",
    "global_rate": 3.0
}

const user3 = {
    "id": 3,
    "email": "emma.dubois@test.com",
    "username": "Emma",
    "password": "Emma-dubois@2025",
    "global_rate": 1.2
}

function checkPassword(password) {
    return crypt.compareSync(password, user.password);
}

function isValidEmail(email) {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(email);
}

function findUser(email) {
    const users = [user1, user2, user3];
    let target = users.filter(w=> w.email == email);
    return target;
}

function testLogin(body) {
    if (body.email == null || body.password == null) {
        return {
            code: 400,
            message: "Invalid credentials"
        }
    }
    if (!isValidEmail(body.email) || findUser(body.email).length == 0) {
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
    let target = findUser(body.email)[0];
    const token = jwt.sign(target, secret);
    return {
        code: 200,
        message: token
    }
}

function testSignup(body) {
    if (body.email == null || body.password == null) {
        return {
            code: 400,
            message: "Invalid credentials"
        }
    }
    if (!isValidEmail(body.email) || findUser(body.email).length == 0) {
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
    let target = findUser(body.email)[0];
    const token = jwt.sign(target, secret);
    return {
        code: 200,
        message: token
    }
}

module.exports = {testLogin, testSignup};
