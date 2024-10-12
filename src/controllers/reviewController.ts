import { Request, Response } from 'express';
import Review from '../models/review';

export const createReview = async (req: Request, res: Response) => {
  try {
    const review = await Review.create({ ...req.body, userId: req.user.id });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getReviews = async (req: Request, res: Response) => {
  const { userId } = req.body;
  try {
    const reviews = await Review.findAll({ where: { userId } });
    res.status(201).json(reviews);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
