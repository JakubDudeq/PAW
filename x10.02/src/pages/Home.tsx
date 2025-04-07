import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Post {
    id: string;
    title: string;
}

const Home = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3000/posts").then((res) => setPosts(res.data));
    }, []);

    return (
        <div className="home">
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
