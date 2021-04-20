const auth = require('../middleware/auth');
const multer = require('multer')
const express = require('express');
const router = express.Router();
const controller = require('../controllers/heroController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '.jpg');
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

router.post('/', auth, upload.single('backgroundImage'), controller.postHeroController);
router.get('/', controller.getHeroController);

module.exports = router;