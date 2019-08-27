const mongoose = require('mongoose');

require('./db');

const Sechema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  time: Date,
});

const Model = mongoose.model('person',Sechema);


module.exports = Model;

