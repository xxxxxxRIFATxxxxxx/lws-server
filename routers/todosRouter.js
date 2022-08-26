// Dependencies
const express = require('express');
const Todo = require('../models/Todo');

// Initialize
const todoRouter = express.Router();

// Get All Todo
todoRouter.get('/', async (req, res) => {
    // Submit To Database
    try {
        const data = await Todo.find({});
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        });
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Create Todo
todoRouter.post('/', async (req, res) => {
    const newTodo = new Todo(req.body);

    // Submit To Database
    try {
        const data = await newTodo.save();
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        });
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Update Todo
todoRouter.put('/:id', async (req, res) => {
    const id = req.params.id;

    // Submit To Database
    try {
        const data = await Todo.findByIdAndUpdate(id, req.body);
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        });
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Delete Todo
todoRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;

    // Submit To Database
    try {
        const data = await Todo.findByIdAndRemove(id);
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        });
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Single Todo
todoRouter.get('/:id', async (req, res) => {
    const id = req.params.id;

    // Submit To Database
    try {
        const data = await Todo.findById(id).exec();
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        });
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Export
module.exports = todoRouter;