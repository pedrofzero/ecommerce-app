require('dotenv').config()

const { Pool } = require('pg')

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
});

pool.connect()

module.exports = pool;
