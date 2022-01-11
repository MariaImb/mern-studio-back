const {Router} = require ('express');
const router = Router();
const {createContact, getContacts} =require('../controllers/contact.controllers');



router.route('/')
    .post(createContact)
    .get(getContacts)

module.exports = router;