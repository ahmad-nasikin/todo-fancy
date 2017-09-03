const express = require('express');
const router = express.Router();
const fbControl = require('../controllers/fb')



router.get('/', fbControl.login);
router.get('/', fbControl.getUser);
router.delete('/:id', fbControl.deleteUser);


module.exports = router;
