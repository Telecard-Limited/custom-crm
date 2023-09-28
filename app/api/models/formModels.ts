import mongoose, { Document, Model } from "mongoose";

export interface FormType {
  title: string;
  fields: string;
}
const fieldSchema = new mongoose.Schema({
  label: { type: String, required: true },
  type: { type: String, required: true },
  // Other properties of the field...
});
const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fields: [fieldSchema],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.models?.Form || mongoose.model("Form", formSchema);
