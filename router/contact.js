import express from 'express';
import { createContact, getAllContacts, getSingleContact } from '../controllers/contactController.js';


const contactRoute = express.Router();

contactRoute.post('/' ,createContact);

contactRoute.get('/:id', getSingleContact);

contactRoute.get('/', getAllContacts);


export default contactRoute;
