const { Schema } = require("mongoose");

const OrderSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  // Bur or sell will be our mode of transaction
});

module.exports = OrderSchema;
