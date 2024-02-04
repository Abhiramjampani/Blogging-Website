"use client"
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile';
import { data } from 'autoprefixer';

const MyProfile = ({ params }) => {
    const router = useRouter();
    const { data: session } = useSession();

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(`/api/users/${params.id}/posts`)
            const data = await res.json();
            setPosts(data);
        }
        if (params.id)
            fetchPosts()
    }, []);

    return (
        <Profile
            name='User'
            desc="Welcome to User's profile page!"
            data={posts}
        />
    )
}

export default MyProfile;