const multer = require('multer');
const upload = multer();
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const {
    createUserController,
    updateUserController,
    getUserController
} = require('../controllers/userController');

router.post('/', upload.none(), createUserController);
router.put('/', auth, upload.none(), updateUserController);
router.get('/', auth, getUserController);

module.exports = router;