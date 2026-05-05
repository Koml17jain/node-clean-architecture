const taskRepo = require('../repositories/taskRepo');


const createTask = async (userId,
    payload) => {
    return taskRepo.create({ ...payload, user: userId });
}


const getTasks = async (
    userId
) => {

    return taskRepo.findAllByUser(
        userId
    );
};

module.exports = {
    createTask,
    getTasks
};