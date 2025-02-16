import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  coverArt: { type: String, required: true }, // Cover image URL
  fileUrl: { type: String, required: true }, // Book file (PDF) URL
  category: { type: String, default: "book" },
  author: { type: String, required: true },
  pages: { type: Number, required: true },
  isbn: { type: String, required: true },
  date: { type: Date, required: true },
});

export default mongoose.model("Book", bookSchema);
