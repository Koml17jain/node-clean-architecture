const Task = require('../models/task');

const create = (data) => {
    return Task.create(data);
};

const findAllByUser = (userId) => {
    return Task.find({ user: userId });
};

const findById = (taskId) => {
    return Task.findById(taskId);
};

const update = (taskId, data) => {
    return Task.findByIdAndUpdate(
        taskId,
        data,
        { new: true }
    );
};

const remove = (taskId) => {
    return Task.findByIdAndDelete(taskId);
};

module.exports = {
    create,
    findAllByUser,
    findById,
    update,
    remove
};