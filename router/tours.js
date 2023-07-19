import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getTourBySearch, getTourCount, updateTour } from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const tourRoute = express.Router();

tourRoute.post("/", verifyAdmin, createTour);

tourRoute.put("/:id", verifyAdmin, updateTour);

tourRoute.delete("/:id", verifyAdmin, deleteTour);

tourRoute.get("/", getAllTour);

tourRoute.get("/featured", getFeaturedTour);

tourRoute.get("/search", getTourBySearch);

tourRoute.get("/tourcount", getTourCount);

export default tourRoute;
