const Hero = require('../models/hero');
const {
    createHeroValidation
} = require('../validations/heroValidation');

async function postHeroController(req, res, next) {
    const {
        error
    } = createHeroValidation(req.body);
    if (error) return res.status(400).json({
        message: error.details[0].message
    })

    let hero = await Hero.findOne();

    if (hero === null) {
        let hero = await new Hero({
            title: req.body.title,
            designation: req.body.designation
        })
        await hero.save();
        return res.status(200).send(hero);
    }

    hero.title = req.body.title;
    hero.designation = req.body.designation;

    await hero.save();
    res.status(200).send(hero);
}

async function getHeroController(req, res, next) {
    const hero = await Hero.findOne();

    if (hero === null) return res.status(200).json({});

    res.status(200).send(hero);
}

module.exports = {
    postHeroController,
    getHeroController
};