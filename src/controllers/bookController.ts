import { Request, Response } from "express";
import Book from "../models/Book";

export const uploadBook = async (req: Request, res: Response) => {
  try {
    const fileUrl = req.files && (req.files as any).file[0]?.path;
    const coverArtUrl = req.files && (req.files as any).coverArt[0]?.path;

    if (!fileUrl || !coverArtUrl) {
      res.status(400).json({ message: "File or cover art missing" });
      return;
    }

    const newBook = new Book({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      coverArt: coverArtUrl,
      category: "book",
      author: req.body.author,
      pages: req.body.pages,
      isbn: req.body.isbn,
      date: req.body.date,
      fileUrl,
    });

    await newBook.save();
    res.status(201).json({ message: "Book uploaded successfully", newBook });
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error });
  }
};

// Get all Books
export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error });
  }
};
