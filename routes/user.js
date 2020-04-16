const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router() ;

router.get('', UserController.getAllUsers);
router.post('', UserController.storeUser);
router.post('/:id', UserController.updateUser);
router.get('/:id', UserController.showOneUser);
router.post('/:id', UserController.deleteUser);

module.exports = router ;


