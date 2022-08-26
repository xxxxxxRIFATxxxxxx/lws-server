// Dependencies
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const todosRouter = require('./routers/todosRouter');
const notFoundHandler = require('./middlewares/notFoundHandler');
const defaultErrorHandler = require('./middlewares/defaultErrorHandler');

// Initialize
const app = express();
dotenv.config();

// Database Connection
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
    .then(() => console.log('Database Connection Successful!'))
    .catch(err => console.log(err.message));

// Middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Routing Setup
app.use('/todos', todosRouter);

// Default Route
app.get('/', (req, res) => {
    res.send({
        message: `Welcome to ${process.env.APP_NAME}`
    });
});

// Error Handler
app.use(notFoundHandler);
app.use(defaultErrorHandler);

// Server
app.listen(process.env.PORT || 5000, () => {
    console.log(`${process.env.APP_NAME} app listening on port ${process.env.PORT}`);
});