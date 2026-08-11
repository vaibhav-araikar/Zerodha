const { model } = require("mongoose");
const Position = require("../schemas/PositionSchema");

const PositionModel = model("Position", Position);

module.exports = PositionModel;
