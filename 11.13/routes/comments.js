const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new comment
router.post('/', async (req, res) => {
    const { content, postId } = req.body;
    try {
        const comment = await prisma.comment.create({
            data: { content, postId: parseInt(postId) },
        });
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Read all comments
router.get('/', async (req, res) => {
    const comments = await prisma.comment.findMany({ include: { post: true } });
    res.status(200).json(comments);
});

// Read a single comment by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await prisma.comment.findUnique({
            where: { id: parseInt(id) },
            include: { post: true },
        });
        if (!comment) return res.status(404).json({ error: "Comment not found" });
        res.status(200).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a comment
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    try {
        const comment = await prisma.comment.update({
            where: { id: parseInt(id) },
            data: { content },
        });
        res.status(200).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a comment
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.comment.delete({ where: { id: parseInt(id) } });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
