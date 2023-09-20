import mongoose from "mongoose";
const companySchema = new mongoose.Schema({
  companyName: String,
  companyEmail: String,
  isCompanyEmail: Boolean,
  description: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

module.exports = companySchema;
