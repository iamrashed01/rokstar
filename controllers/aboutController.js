const _ = require('lodash');
const {
    About,
    Social,
    Bio
} = require('../models/about');
const {
    createAboutValidation,
    createSocialValidation,
    addBioValidation
} = require('../validations/aboutValidation');

async function postAboutController(req, res, next) {
    const {
        error
    } = createAboutValidation(req.body);
    if (error) return res.status(400).json({
        message: error.details[0].message,
        success: false
    })

    if (!req.file) return res.status(400).json({
        message: "\"leftImage\" is required",
        success: false
    });

    let about = await About.findOne().select('-__v');

    if (about === null) {
        let about = await new About({
            title: req.body.title,
            leftImage: req.file.path
        })
        await about.save();
        return res.status(200).json({
            data: about,
            message: 'Added Succesfully',
            success: true
        });
    }

    about.title = req.body.title;
    about.leftImage = req.file.path;

    await about.save();
    res.status(200).json({
        data: about,
        message: 'Added Succesfully',
        success: true
    });
}

async function getAboutController(req, res, next) {
    const about = await About.findOne().select('-__v');
    const social = await Social.findOne().select('-__v');
    const bio = await Bio.find().select('-__v');

    res.status(200).json({
        about: about !== null ? about : {},
        social: social !== null ? social : {},
        bio: bio !== null ? bio : {}
    });
}

async function postSocialController(req, res, next) {
    const {
        error
    } = createSocialValidation(req.body);
    if (error) return res.status(400).json({
        message: error.details[0].message,
        success: false
    })

    const social = await Social.findOne().select('-__v');
    if (social === null) {
        const social = new Social(_.pick(req.body, ['facebook', 'twitter', 'linkedin', 'youtube']))
        await social.save();
        return res.status(200).json({
            data: social,
            message: "Added Succesfully",
            success: true
        });
    }

    social.facebook = req.body.facebook;
    social.twitter = req.body.twitter;
    social.linkedin = req.body.linkedin;
    social.youtube = req.body.youtube;

    await social.save();

    res.status(200).json({
        data: social,
        message: 'Updated Succesfully',
        success: true
    });
}

async function addBioController(req, res, next) {
    const {
        error
    } = addBioValidation(req.body);
    if (error) return res.status(400).json({
        message: error.details[0].message,
        success: false
    })

    const bio = new Bio({
        bio: req.body.bio
    })
    await bio.save();

    res.status(200).json({
        data: bio,
        message: "Added Succesfully",
        success: true
    })
}

async function deleteBioController(req, res, next) {
    const bio = await Bio.findByIdAndRemove(req.params.id);
    if (!bio) return res.status(400).json({
        message: 'The Bio with the given ID not found.',
        success: false
    })

    res.status(200).json({
        data: bio,
        message: "Deleted Succesfully",
        success: true
    })
}

module.exports = {
    postAboutController,
    getAboutController,
    postSocialController,
    addBioController,
    deleteBioController
};