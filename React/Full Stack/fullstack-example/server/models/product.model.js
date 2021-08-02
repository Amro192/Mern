const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Title cannot be emtpy"],
	},
	price: {
		type: Number,
		required: [true, "Price cannot be emtpy"],
	},
	description: {
		type: String,
	}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;