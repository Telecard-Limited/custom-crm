import mongoose, { Document, Model } from "mongoose";

export interface EmailType {
  body: string;
  email: string;
  subject: string;
  fromEmail: string;
  fromName: string;
  message: string;
  createdAt: string;
}
export interface EmailDocument extends EmailType, Document {
  body: string;
  email: string;
  subject: string;
  fromEmail: string;
  fromName: string;
  message: string;
  createdAt: string;
}
type MergeType<A, B> = Omit<A, keyof B> & B;

const EmailSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, ref: "user" },
  userId: mongoose.Schema.Types.ObjectId,
  subject: String,
  fromEmail: String,
  fromName: String,
  body: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});
export default mongoose?.models?.Email ||
  mongoose.model<EmailDocument>("email", EmailSchema);
