const authService = require('../services/authservice');

const register = async (
    req,
    res
) => {
    try {
        console.log(req.body);
        const data = await authService.register(req.body);

        res.status(200).json(data);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}


const login = async (
    req,
    res
) => {
    try {
        const data =
            await authService.login(
                req.body
            );

        res.json(data);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


const verify = async (
    req,
    res
) => {
    try {
        const user =
            await authService.verifyUser(
                req.user.id
            );

        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

module.exports = {
    register,
    login,
    verify
}