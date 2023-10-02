import mongoose from "mongoose";

const WorkSpaceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  workspaceName: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

export default mongoose.models?.WorkSpace ||
  mongoose.model("WorkSpace", WorkSpaceSchema);
