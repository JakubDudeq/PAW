const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    const { title, content, categoryId } = req.body;
    try {
        const post = await prisma.post.create({
            data: { title, content, categoryId: parseInt(categoryId) },
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    const posts = await prisma.post.findMany({ include: { category: true, comments: true } });
    res.status(200).json(posts);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await prisma.post.findUnique({
            where: { id: parseInt(id) },
            include: { category: true, comments: true },
        });
        if (!post) return res.status(404).json({ error: "Post not found" });
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content, categoryId } = req.body;
    try {
        const post = await prisma.post.update({
            where: { id: parseInt(id) },
            data: { title, content, categoryId: parseInt(categoryId) },
        });
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.post.delete({ where: { id: parseInt(id) } });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
