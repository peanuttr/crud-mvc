const express = require('express'),
    userController = require('../controllers/user');

const router = express.Router();

router.get('/', userController.userIndex);

module.exports = router;