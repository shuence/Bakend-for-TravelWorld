import express from "express";
import { getTourBySearch } from "../controllers/searchController.js";

const searchRoute = express.Router();

// Route for getting featured tours
searchRoute.get("/", getTourBySearch);

export default searchRoute;


