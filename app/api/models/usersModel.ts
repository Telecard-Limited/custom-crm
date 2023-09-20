import mongoose, { Document, Model } from "mongoose";

export interface UserType {
  name: string;
  email: string;
  emailVerified: Date;
  password: string;
  image: string;
  country: string;
  phoneNumber: string;
  role: "ADMIN" | "SUPERADMIN";
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface UserDocument extends UserType, Document {
  _id: string;
  name: string;
  email: string;
  //   emailVerified: Boolean;
  password: string;
  image: string;
  country: string;
  phoneNumber: string;
  role: "ADMIN" | "SUPERADMIN";
  isActive: boolean;
}
type MergeType<A, B> = Omit<A, keyof B> & B;

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  emailVerified: Boolean,
  password: String,
  image: String,
  country: String,
  phoneNumber: String,
  role: {
    type: String,
    enum: ["ADMIN", "SUPERADMIN"],
    default: "ADMIN",
  },
  isActive: Boolean,
});

export default mongoose.models?.User ||
  mongoose.model<UserDocument>("User", UserSchema);
