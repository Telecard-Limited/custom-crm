import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  urlToCapture: { type: String, required: true }, // URL of the page to capture
  pdfFilePath: { type: String }, // Path to the generated PDF file
  captureDate: { type: Date }, // Date and time of the capture
  captureStatus: {
    type: String,
    enum: ["Pending", "Completed", "Failed"],
    default: "Pending",
  }, // Capture status
});

export default mongoose.models?.ReportBuilder ||
  mongoose.model("ReportBuilder", reportSchema);
