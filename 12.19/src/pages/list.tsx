import React, { useEffect, useState } from 'react';

interface Post {
    id: number;
    title: string;
    body: string;
}

const List: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div>
            <h1>Lista Postów</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <p>{post.id} {post.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
