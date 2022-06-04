const express = require('express')
const Task = require('../db/models/task')

const router = new express.Router()

router.post('/tasks', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send(e);
    }

    // task.save().then(() => {
    //     res.status(201).send(task);
    // }).catch((e) => {
    //     res.status(400).send(e);
    // })
})

router.get('/tasks', async (req, res) => {

    try {
        const task = await Task.find({});
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send(e)
    }

    // Task.find({}).then((task) => {
    //     res.status(200).send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findById(_id);

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(500).send(e);
    }

    // Task.findById(_id).then((task) => {
    //     if (!task) {
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send(e);
    // })
})


router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']

    const isValidationOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isValidationOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const task = await Task.findById(req.params.id);

        updates.forEach((update) => task[update] = req.body[update])

        await task.save()
        
        //const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!task)
            return res.send(404).send()

        res.send(task)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.delete('/tasks/:id', async(req,res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if(!task)
        return res.status(404).send()

        res.send(task)
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = router