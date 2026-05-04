const userModel = require('../models/user');


const findById = async (id) => {
    return userModel.findById(id).select('-password');
}

const findByEmail = async (email) => {
    return userModel.findOne({ email });
}


const create = async (userData) => {
    return userModel.create(userData);
}

module.exports = {
    findByEmail,
    findById,
    create
}