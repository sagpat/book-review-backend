import { Request, Response } from 'express';
import Book from '../models/book';

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
