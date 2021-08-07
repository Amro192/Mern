const mongoose = require('mongoose');
const AuthorsSchema = new mongoose.Schema({
    name: { type: String ,
    required:[true,"The Name is required"],
    minlength:[3,"The Name is at lest 3 character"]

    },
}, { timestamps: true });
module.exports.Authors = mongoose.model('Authors', AuthorsSchema);