const mongoose = require('mongoose');

const antivirusSchema = mongoose.Schema({
 //_id:{type:Object},
  nom: { type: String},
  version: { type: String},
  pointsforts: { type: String},
  vulnerabilites: { type: String},
  attaques: { type: String},
});

module.exports = mongoose.model('antivirus', antivirusSchema);