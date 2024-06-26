const { Series } = require("../models");

const create_series_S = (data) => {
    return Series.create(data);
};
const get_series_S = () =>{
    return Series.find()
}

module.exports = { create_series_S, get_series_S };
