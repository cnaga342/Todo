const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a task by ID
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new task
router.post('/', async (req, res) => {
    try {
        const newTask = await Task.create(req.body);
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a task
router.put('/:id', async (req, res) => {
    try {
        await Task.update(req.body, { where: { id: req.params.id } });
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    try {
        await Task.destroy({ where: { id: req.params.id } });
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
