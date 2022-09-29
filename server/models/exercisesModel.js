const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  force: { type: String, required: true },
  level: { type: String, required: true },
  mechanic: { type: String, required: true },
  equipment: { type: String, required: true },
  primaryMuscles: { type: String, required: true },
  secondaryMuscles: { type: String, required: true },
  instructions: { type: Array, required: true },
  category: { type: String, required: true },
});

const Exercises = mongoose.model("Exercises", exerciseSchema);
module.exports = Exercises;
