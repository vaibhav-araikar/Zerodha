const { model } = require("mongoose");
const Positio = require("../schemas/HoldingSchema");

const PositionModel = model("Position", PositionSchema);

module.exports = PositionModel;
