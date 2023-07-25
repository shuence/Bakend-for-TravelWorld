import express from 'express';
import { createBooking, getAllBookings, getBooking } from '../controllers/bookingController.js';

const bookingRoute = express.Router();

// Create a new review for a tour
bookingRoute.post('/', createBooking);
bookingRoute.get('/:id', getBooking);
bookingRoute.post('/', getAllBookings);

export default bookingRoute
