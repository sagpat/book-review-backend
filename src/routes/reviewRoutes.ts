import express from "express";
import { createReview, getReviews } from "../controllers/reviewController";
import { authorize } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/createReview", authorize(["user", "admin"]), createReview);
router.post("/getReviews", getReviews);

export default router;
