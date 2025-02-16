import { Request, Response } from "express";
import Audio from "../models/Audio";

export const uploadAudio = async (req: Request, res: Response) => {
  try {
    const fileUrl = req.files && (req.files as any).file[0]?.path;
    const coverArtUrl = req.files && (req.files as any).coverArt[0]?.path;

    if (!fileUrl || !coverArtUrl) {
      res.status(400).json({ message: "File or cover art missing" });
      return;
    }

    const newAudio = new Audio({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      coverArt: coverArtUrl,
      category: "audio",
      speaker: req.body.speaker,
      duration: req.body.duration,
      date: req.body.date,
      fileUrl,
    });

    await newAudio.save();
    res.status(201).json({ message: "Audio uploaded successfully", newAudio });
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error });
  }
};

// Get all Audios
export const getAudios = async (req: Request, res: Response) => {
  try {
    const audios = await Audio.find();
    res.status(200).json(audios);
  } catch (error) {
    res.status(500).json({ message: "Error fetching audios", error });
  }
};
