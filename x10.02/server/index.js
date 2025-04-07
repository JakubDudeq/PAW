const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");
const app = express();

app.use(cors());
app.use(express.json());

let posts = [
    {
        id: "1",
        title: "First Post",
        content: "This is the first post.",
        comments: [
            { id: "c1", text: "Great post!" },
            { id: "c2", text: "Thanks for sharing." },
        ],
    },
];

app.get("/posts", (req, res) => {
    res.json(posts.map(({ id, title }) => ({ id, title })));
});

app.get("/posts/:id", (req, res) => {
    const post = posts.find((p) => p.id === req.params.id);
    if (!post) return res.sendStatus(404);
    res.json(post);
});

app.post("/posts/:id/comments", (req, res) => {
    const post = posts.find((p) => p.id === req.params.id);
    if (!post) return res.sendStatus(404);
    const newComment = { id: uuid(), text: req.body.text };
    post.comments.push(newComment);
    res.status(201).json(newComment);
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
