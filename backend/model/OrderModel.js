const { model } = require("mongoose");
const o = require("../schemas/HoldingSchema");

const OrderModel = model("Order", OrderSchema);

module.exports = OrderModel;
