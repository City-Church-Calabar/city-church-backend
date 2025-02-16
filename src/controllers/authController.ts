import { NextFunction, Request, RequestHandler, Response } from "express";
import Admin from "../models/Admin";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login: RequestHandler = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
