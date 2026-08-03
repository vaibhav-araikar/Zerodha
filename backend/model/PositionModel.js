const { model } = require("mongoose");
const Position = require("../schemas/HoldingSchema");

const PositionModel = model("Position", PositionSchema);

module.exports = PositionModel;
