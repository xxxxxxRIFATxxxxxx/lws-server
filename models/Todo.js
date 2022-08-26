// Dependencies
const mongoose = require('mongoose');

// Schema
const todoSchema = new mongoose.Schema({
    id: {
        type: Number,
        maxlength: 255,
        trim: true
    },

    text: {
        type: String,
        maxlength: 255,
        trim: true
    },

    completed: {
        type: Boolean,
    },

    color: {
        type: String,
        maxlength: 255,
        trim: true
    },
},

    {
        timestamps: true
    }
);

const Todo = mongoose.model('Todo', todoSchema);

// Export
module.exports = Todo;