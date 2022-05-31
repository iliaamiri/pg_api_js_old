const {
    sqlDbConfigDev,
} = require('../config/database');

const { Sequelize } = require('sequelize');

// Override timezone formatting
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);

    // Z here means current timezone, _not_ UTC
    // return date.format('YYYY-MM-DD HH:mm:ss.SSS Z');
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};

const sequelizeDev = new Sequelize(sqlDbConfigDev);

module.exports.sequelizeDev = sequelizeDev




const { mongoDbConfig } = require('../config/database.js');
const mongoose = require('mongoose');

const uri = `mongodb://${mongoDbConfig.host}:${mongoDbConfig.port}/${mongoDbConfig.cluster}?compressors=zlib&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`;

const mongoDb = async () => {
    try {
        return await mongoose.createConnection(uri);
    } catch (e) {
        console.log(e)
    }
};

module.exports.mongoDb = mongoDb;