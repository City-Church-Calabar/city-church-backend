import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder = "church-uploads";
    if (file.fieldname === "file") folder = "books";
    if (file.fieldname === "coverArt") folder = "coverArt";
    if (file.mimetype.startsWith("audio/")) folder = "audio";

    return {
      folder,
      resource_type: file.mimetype.startsWith("audio/") ? "video" : "image", // "video" is required for audio files
      allowed_formats: ["jpg", "jpeg", "png", "mp3", "pdf"],
    };
  },
});

const upload = multer({ storage });

export default upload;
