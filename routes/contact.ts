import express from 'express';
import { AddContact,DeleteContact,EditContact, GetContact } from '../controller/contact';
var router = express.Router();

router.get('/', GetContact);
router.post('/', AddContact);
router.patch('/',EditContact );
router.delete('/',DeleteContact );

export default router;
