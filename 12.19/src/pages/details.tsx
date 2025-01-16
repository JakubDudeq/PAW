import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [post, setPost] = useState<any>(null);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        if (id) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setPost(data);
                    return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
                })
                .then((response) => response.json())
                .then((userData) => setUser(userData));
        }
    }, [id]);

    if (!post || !user) {
        return <p>Ładowanie...</p>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h3>Autor</h3>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <Link to="/">Powrót do listy postów</Link>
        </div>
    );
};

export default Details;
