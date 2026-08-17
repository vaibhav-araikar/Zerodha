const { Password } = require("@mui/icons-material");
const { Schema } = require("mongoose");

const UserSchema = new Schema({
  email: String,
  Password: String,
});

module.exports = UserSchema;
