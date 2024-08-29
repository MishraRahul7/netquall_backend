import express from 'express';
import { AddContact,DeleteContact,EditContact } from '../controller/contact';
var router = express.Router();

/* GET users listing. */
router.get('/add-contact', AddContact);
router.get('/edit-contact',EditContact );
router.get('/delete-contact',DeleteContact );

module.exports = router;
