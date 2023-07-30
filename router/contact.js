import express from 'express';
import { createContact, getAllContacts, getSingleContact } from '../controllers/contactController.js';
import { verifyAdmin } from '../utils/verifyToken.js';


const contactRoute = express.Router();

contactRoute.post('/' ,createContact);

contactRoute.get('/:id',verifyAdmin, getSingleContact);

contactRoute.get('/',verifyAdmin, getAllContacts);


export default contactRoute;
