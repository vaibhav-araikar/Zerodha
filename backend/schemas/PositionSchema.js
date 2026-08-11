const { Schema } = require("mongoose");

const PositionSchema = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String, // was Number — fix
  day: String,
  isLoss: Boolean,
});

module.exports = PositionSchema;
