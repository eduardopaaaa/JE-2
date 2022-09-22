const mongoose = require('mongoose');

const vgSchema = new mongoose.Schema(
  {

    
    library: String,
    game: String,
    card: String,
    image: String,
    video: String,
    playCheck: {type:Boolean, default: false},

}
);

const VG = mongoose.model('VG', vgSchema);

module.exports = VG;
