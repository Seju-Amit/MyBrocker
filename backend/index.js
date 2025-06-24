require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app =express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.listen(3002, () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(uri);
    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    });
});