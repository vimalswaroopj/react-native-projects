const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

router.post('/signup', async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
        const user = new User({ email, password });
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
        await user.save();
        res.send({ token });
    } catch (err) {
        res.status(422).send(err.message)
    }
});

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).send({ error: "Must provide email and password." })
    }

    const user = await User.findOne({ email })
    if (!user) {
        return res.status(422).send({ error: "Invalid Email or Password." })
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
        res.send({ token })
    } catch (error) {
        return res.status(422).send({ error: "Invalid Email or Password." })
    }
});

module.exports = router