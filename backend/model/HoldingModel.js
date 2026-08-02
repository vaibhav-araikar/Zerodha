const { model } = require("mongoose");
const HoldingSchema = require("../schemas/HoldingSchema");

const HoldingModel = model("Holding", HoldingSchema);
// Export the HoldingModel for use in other parts of the application
// And Holding will converted to holdings in the database

module.exports = HoldingModel;
