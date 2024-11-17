const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    const { name } = req.body;
    try {
        const category = await prisma.category.create({ data: { name } });
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Read all categories
router.get('/', async (req, res) => {
    const categories = await prisma.category.findMany();
    res.status(200).json(categories);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const category = await prisma.category.findUnique({ where: { id: parseInt(id) } });
        if (!category) return res.status(404).json({ error: "Category not found" });
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const category = await prisma.category.update({
            where: { id: parseInt(id) },
            data: { name },
        });
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.category.delete({ where: { id: parseInt(id) } });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
