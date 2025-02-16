import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import audio from "./routes/audio";
import book from "./routes/book";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/audio", audio);
app.use("/api/book", book);

// Connect to MongoDB
if (!process.env.MONGO_URI) {
  console.error("MONGO_URI is not defined in .env");
  process.exit(1);
}
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB Connected"))
  .catch((err: any) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// import express from "express";
// // import dotenv from "dotenv";
// import cors from "cors";

// // // Load environment variables
// // dotenv.config();

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Basic route
// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
