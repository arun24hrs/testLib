const mongoose = require("mongoose");

const connection = mongoose.connect(`mongodb+srv://ranaji:jirana@cluster0.erw7fqw.mongodb.net/test?retryWrites=true&w=majority`);

module.exports = connection;