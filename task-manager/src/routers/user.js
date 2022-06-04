const express = require('express')
const User = require('../db/models/user')

const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    }
    catch (e) {
        res.status(400).send(e)
    }

    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);

        res.send(user);
    } catch (error) {
        res.status(400).send()
    }
})

router.get('/users', async (req, res) => {
    try {
        const result = await User.find({});
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
    // User.find({}).then((result) => {
    //     res.send(result)
    // }).catch((error) => {
    //     res.status(500).send(error);
    // })
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id);

        if (!user) {
            return res.status(404).send()
        }

        res.status(200).send(user)
    }
    catch (error) {
        res.status(500).send()
    }

    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }
    //     res.status(200).send(user)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

//new = true is to return the new user with the updated data
//if we try to update any property doesn't exist on user, it would be ignored
router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];

    const isValidationOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    });

    if (!isValidationOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findById(req.params.id);

        updates.forEach((update) => {
            user[update] = req.body[update]
        })

        await user.save()

        //mongoose skip the middleware here
        //want to do more traditional way
        //const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!user) {
            res.status(404).send()
        }

        res.send(user)
    } catch (error) {
        //here becoz of connectivity issue
        //or may be validation fails then also the flow will come here
        res.status(500).send()
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user)
            return res.status(404).send()

        res.send(user)
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = router