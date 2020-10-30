const multer = require('multer');
const upload = multer();
const express = require('express');
const router = express.Router();
const {
    createUserController,
    updateUserController
} = require('../controllers/userController');

router.post('/', upload.none(), createUserController);
router.put('/', upload.none(), updateUserController);

module.exports = router;