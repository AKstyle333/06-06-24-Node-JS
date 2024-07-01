const Jwt = require("jsonwebtoken")

const create_jwt_token_S = (payload) => {
    return Jwt.sign(payload, "aksSecret");
};

const verify_jwt_token_S = (token) => {
    return Jwt.verify(token, "aksSecret");
};

module.exports={
    create_jwt_token_S,
    verify_jwt_token_S
}