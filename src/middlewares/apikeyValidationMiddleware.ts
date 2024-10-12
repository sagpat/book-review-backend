import { Request, Response, NextFunction } from 'express';

// Middleware to verify the API key
export const checkApiKey = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey) {
    return res.status(403).json({ message: 'API key missing' });
  }
  const validApiKey = process.env.API_KEY;

  if (apiKey === validApiKey) {
    next();
  } else {
    return res.status(403).json({ message: 'Invalid API key' });
  }
};
