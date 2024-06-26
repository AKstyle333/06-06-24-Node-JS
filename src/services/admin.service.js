const { Admin } = require("../models")

const create_admin_S = (data) =>{
    return Admin.create(data)
}
const get_admin_S = () =>{
    return Admin.find().populate("fav_cartoon");
}
const delete_admin_S = (id) =>{
    return Admin.findByIdAndDelete(id)
}
const update_admin_S = (id,data) =>{
    return Admin.findByIdAndUpdate(id,data)
}

module.exports = {
    create_admin_S,
    get_admin_S,
    delete_admin_S,
    update_admin_S,
};