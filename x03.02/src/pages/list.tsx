import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

interface Post {
    id: number;
    title: string;
}

const fetchPosts = async (): Promise<Post[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
};

const List: React.FC = () => {
    const { data: posts, isLoading, error } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });

    if (isLoading) return <p>Ładowanie...</p>;
    if (error) return <p>Błąd pobierania danych</p>;

    return (
        <div>
            <h1>Lista Postów</h1>
            <ul>
                {posts?.map((post) => (
                    <li key={post.id}>
                        <Link to={`/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
