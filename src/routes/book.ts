import express from "express";
import { uploadBook, getBooks } from "../controllers/bookController";
import upload from "../middleware/upload";

const router = express.Router();

// Upload Book with CoverArt to Cloudinary
router.post(
  "/upload",
  upload.fields([{ name: "file" }, { name: "coverArt" }]),
  uploadBook
);
router.get("/", getBooks);

export default router;
