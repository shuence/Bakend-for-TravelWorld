import express from 'express';
import {
  createReview,
  getTourReviews,
  deleteReview,
} from "../controllers/reviewController.js";
import verifyUser  from '../utils/verifyToken.js';

const reviewRoute = express.Router();

// Create a new review for a tour
reviewRoute.post('/:TourId' ,createReview);

// Get all reviews for a tour
reviewRoute.get('/:TourId', getTourReviews);

// Delete a review
reviewRoute.delete('/:reviewId',verifyUser, deleteReview);

export default reviewRoute;
