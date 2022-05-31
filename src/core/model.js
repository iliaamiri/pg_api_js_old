const database = require("./database.js");
const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = class Model {
    constructor() {
        this.database = database();
        this.mongooseSchema = Schema;
    }

    getModel(schema) {
        return this.model = this.database.then(database => database.model(this.constructor.name, schema))
    }
}