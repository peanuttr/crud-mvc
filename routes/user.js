const express = require('express'),
    userController = require('../controllers/user');

const router = express.Router();

router.get('/', userController.userIndex);
router.get('/:id', userController.userById);
router.post('/adduser', userController.userAdd);
router.put('/update/:id', userController.userEdit);
router.delete('/delete/:id', userController.userDel);

module.exports = router;