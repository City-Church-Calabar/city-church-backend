import express from "express";
import { uploadAudio, getAudios } from "../controllers/audioController";
import upload from "../middleware/upload";

const router = express.Router();

// Upload Audio with CoverArt to Cloudinary
router.post(
  "/upload",
  upload.fields([{ name: "file" }, { name: "coverArt" }]),
  uploadAudio
);
router.get("/", getAudios);

export default router;
