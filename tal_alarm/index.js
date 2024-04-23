const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: 'http://172.20.10.4:8081',
    methods: ["GET", "POST"], // Consider restricting in production
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Correctly reference the routes
const routes = require('./routes'); // This imports index.js from the routes folder
app.use('/', routes);

const port = 5000; // Change the port to 5000
app.listen(port, () => {
    console.log(`Backend Server is running on port ${port}`); // Update console.log message
});
