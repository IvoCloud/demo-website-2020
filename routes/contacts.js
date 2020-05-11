const express = require('express');

const contactsController = require('../controllers/contactsController');

const router = express.Router();

router.get('', contactsController.getContacts); 

module.exports = router;