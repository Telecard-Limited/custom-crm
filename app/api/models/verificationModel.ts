import mongoose from "mongoose";

const VerificationTokenSchema = new mongoose.Schema({
  token: { type: String, unique: true },
  expires: Date,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
const VerificationToken = mongoose.model(
  "VerificationToken",
  VerificationTokenSchema
);
module.exports = VerificationToken;
