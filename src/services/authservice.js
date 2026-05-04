const bycrypt = require('bcryptjs');

const userRepo = require('../repositories/userRepo');
const generateToken = require('../utils/generateToken');


const register = async ({ email, password, name }) => {
    const existingUser = await userRepo.findByEmail(email);

    if (existingUser) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bycrypt.hash(password, 10);

    const user = userRepo.create({ email, password: hashedPassword, name })

    return {
        user,
        token: generateToken(user._id)
    }

};

const login = async ({ email, password }) => {
    const user = await userRepo.findByEmail(email);

    if (!user) {
        throw new Error('Please register first!');
    }

    const isSamePassword = await bycrypt.compare(password, user.password);

    if (!isSamePassword) {
        throw new Error('Invalid Credentials');
    }

    return {
        user,
        token: generateToken(user._id)
    }
};

const verifyUser = async (userId) => {
    const user = await userRepo.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    return user;
}

module.exports = {
    register,
    login,
    verifyUser
}