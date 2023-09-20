import mongoose from "mongoose";
const departmentsSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  designation: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

const Departments = mongoose.model("Departments", departmentsSchema);

module.exports = Departments;
