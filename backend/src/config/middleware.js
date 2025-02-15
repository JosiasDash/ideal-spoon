const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();
const secret = process.env.TEST_SECRET;
// <>

function login_required(req, res, next) {
    // console.log(req.headers.authorization);
    if (!req.headers["authorization"]) {
        return res.status(401).json({
            message: "Token not provided",
        })
    }
    const token = req.headers["authorization"].split(" ")[1];
    
    if (!token) {
        return res.status(401).json({
            message: 'Token not provided'
        })
    }
    jwt.verify(token, secret, function(error, payload) {
        if (error) {
            return res.status(401).json({
                message: "Invalid token",
            })
        }
        req.user = payload;
        next();
    })
}

module.exports = {
    login_required
}
