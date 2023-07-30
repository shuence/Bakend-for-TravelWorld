import express from 'express';
import {
  createBlog,
  updateBlog,
  getSingleBlog,
  getAllBlogs,
  getFeaturedBlogs} from '../controllers/blogController.js';

const blogRoute = express.Router();

blogRoute.get('/featured', getFeaturedBlogs);

blogRoute.get('/:id', getSingleBlog);

blogRoute.get('/', getAllBlogs);

blogRoute.post('/', createBlog);

blogRoute.put('/:id', updateBlog);

export default blogRoute;
