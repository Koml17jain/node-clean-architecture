const taskService = require('../services/taskService');


const create = async (req, res) => {
    try {
        let task = await taskService.createTask(req.user.id, req.body);
        res.status(200).json(task)
    }
    catch (error) {
        return res.status(400).json({ message: error.message })
    }
}


const getAll = async (
    req,
    res
) => {

    try {

        const tasks =
            await taskService.getTasks(
                req.user.id
            );

        return res.json(tasks);

    } catch (error) {

        return res
            .status(400)
            .json({
                message: error.message
            });
    }
};

module.exports = {
    create,
    getAll
};