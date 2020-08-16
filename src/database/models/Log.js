const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Log = new Schema({
  userId: String,
  username: String,
  commandId: String,
  commandDisplayName: String,
  phrase: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', Log);
