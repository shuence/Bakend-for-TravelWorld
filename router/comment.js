import express from 'express';
import verifyUser  from '../utils/verifyToken.js';
import { createComment, deleteComment, getCommentsByBlogId} from '../controllers/commentController.js';

const commentRoute = express.Router();

commentRoute.post('/:BlogId' ,createComment);

commentRoute.get('/:BlogId', getCommentsByBlogId);

commentRoute.get('/:commentId', verifyUser,deleteComment);

export default commentRoute;
