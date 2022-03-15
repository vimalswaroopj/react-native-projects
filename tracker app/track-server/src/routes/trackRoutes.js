const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const Tracks = mongoose.model('Track');
const requireAuth = require('../middlewares/requireAuth');
router.use(requireAuth);

router.get('/tracks', async (req, res) => {
    const tracks = await Tracks.find({ userId: req.user._id });
    res.send(tracks)
});

router.post('/tracks', async (req, res) => {
    const { name, locations } = req.body;
    if(!name || !locations) {
        return res.status(422).send({error: "You must provide a name and locations."})
    }
    try {
        const track = new Tracks({ name, locations, userId: req.user._id });
        await track.save(track);
        res.send(track);
    } catch (err) {
        return res.status(422).send({ error: err.message })
    }
})

module.exports = router;