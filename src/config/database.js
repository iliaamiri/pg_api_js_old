const dotenv = require('dotenv');
dotenv.config();

const mongoDbConfig = {
    host: process.env.MONGO_DB_HOST || '127.0.0.1',
    port: process.env.MONGO_DB_PORT || 27017,
    cluster: process.env.MONGO_DB_CLUSTER || "",
    username: process.env.MONGO_DB_USERNAME || '',
    password: process.env.MONGO_DB_PASSWORD || ''
}

// development
const sqlDbConfigDev = {
    host: process.env.SQL_DB_HOST || "",
    username: process.env.SQL_DB_USERNAME || "",
    password: process.env.SQL_DB_PASSWORD || "",
    port: process.env.SQL_DB_PORT || "",
    database: process.env.SQL_DB_NAME || "",
    dialect: process.env.SQL_DB_DIALECT || 'mssql',
    ssl: false,
    define: {
        timestamps: false,
        freezeTableName: true
    },
}

module.exports = {
    sqlDbConfigDev,
    mongoDbConfig
}