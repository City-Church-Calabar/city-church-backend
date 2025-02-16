import mongoose from "mongoose";

const audioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  coverArt: { type: String, required: true }, // Cover art image URL
  fileUrl: { type: String, required: true }, // Audio file URL
  category: { type: String, default: "audio" },
  speaker: { type: String, required: true },
  duration: { type: String, required: true },
  date: { type: Date, required: true },
});

export default mongoose.model("Audio", audioSchema);
