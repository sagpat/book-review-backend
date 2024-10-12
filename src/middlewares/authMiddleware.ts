import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

export const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).json({ message: 'No token provided' });

    jwt.verify(token, process.env.JWT_SECRET as string, (err: any, decoded: any) => {
      if (err) return res.status(401).json({ message: 'Unauthorized' });

      req.user = decoded; 
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Forbidden: insufficient rights' });
      }
      next();
    });
  };
};
