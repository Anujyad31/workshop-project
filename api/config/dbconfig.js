require('dotenv').config();
const harperive = require('harperive').Client;

const DB_CONFIG = {
    harperHost: process.env.DB_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    schema: process.env.DB_SCHEMA
};

const db = new harperive(DB_CONFIG);

module.exports = db;