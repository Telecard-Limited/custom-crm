import mongoose from "mongoose";

const WorkSpaceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  workspaceName: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

const WorkSpace = mongoose.model("WorkSpace", WorkSpaceSchema);
module.exports = WorkSpace;
