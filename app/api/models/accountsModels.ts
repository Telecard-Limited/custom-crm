import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  type: String,
  provider: String,
  providerAccountId: String,
  refresh_token: String,
  access_token: String,
  expires_at: Number,
  token_type: String,
  scope: String,
  id_token: String,
  session_state: String,
});

accountSchema.index({ userId: 1 }, { unique: true });
export default mongoose.model("Account", accountSchema);
