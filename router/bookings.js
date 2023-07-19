import express from 'express';
import { createBooking, getAllBookings, getBooking } from '../controllers/bookingController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const bookingRoute = express.Router();

// Create a new review for a tour
bookingRoute.post('/',verifyUser, createBooking);
bookingRoute.post('/:id',verifyUser, getBooking);
bookingRoute.post('/',verifyAdmin, getAllBookings);

export default bookingRoute

