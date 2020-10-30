const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const controller = require('../controllers/aboutController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
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
})

router.post('/', auth, upload.single('leftImage'), controller.postAboutController);
router.get('/', controller.getAboutController);
router.post('/socials', auth, controller.postSocialController);
router.post('/bio', auth, controller.addBioController);
router.delete('/bio/:id', auth, controller.deleteBioController);

module.exports = router;