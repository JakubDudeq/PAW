import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';

const fetchPost = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json();
};

const fetchUser = async (userId: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.json();
};

const Details = () => {
    const { id } = useParams<{ id: string }>();

    const { data: post, isLoading: postLoading } = useQuery({
        queryKey: ['post', id],
        queryFn: () => fetchPost(id!),
        enabled: !!id,
    });

    const { data: user, isLoading: userLoading } = useQuery({
        queryKey: ['user', post?.userId],
        queryFn: () => fetchUser(post!.userId),
        enabled: !!post?.userId,
    });

    if (postLoading || userLoading) return <p>Ładowanie...</p>;

    return (
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
            <h3>Autor</h3>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            <Link to="/">Powrót do listy postów</Link>
        </div>
    );
};

export default Details;
