import express from 'express';
import { createBook, getBooks } from '../controllers/bookController';
import { authorize } from '../middlewares/authMiddleware'; // Middleware for auth

const router = express.Router();

router.post('/createBook', authorize(['admin']), createBook);
router.get('/getBooks', getBooks);

export default router;