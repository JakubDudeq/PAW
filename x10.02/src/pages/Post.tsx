import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Comment {
    id: string;
    text: string;
}

interface Post {
    id: string;
    title: string;
    content: string;
    comments: Comment[];
}

const Post = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [comment, setComment] = useState("");

    const fetchPost = () => {
        axios.get(`http://localhost:3000/posts/${id}`).then((res) => setPost(res.data));
    };

    useEffect(() => {
        fetchPost();
    }, [id]);

    const handleAddComment = () => {
        axios
            .post(`http://localhost:3000/posts/${id}/comments`, { text: comment })
            .then(() => {
                setComment("");
                fetchPost();
            });
    };

    if (!post) return <div>Loading...</div>;

    return (
        <div className="post">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <h3>Comments</h3>
            <ul>
                {post.comments.map((c) => (
                    <li key={c.id}>{c.text}</li>
                ))}
            </ul>
            <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment"
            />
            <button onClick={handleAddComment}>Add</button>
        </div>
    );
};

export default Post;
