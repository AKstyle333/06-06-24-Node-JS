const bcrypt = require("bcrypt");

const create_bcrypt_S = (password) => {
    return bcrypt.hash(password, 10);
};

const compare_bcrypt_S = (hash_password,password) => {
    return bcrypt.compare(hash_password,password);
};

module.exports={
    create_bcrypt_S,
    compare_bcrypt_S
}