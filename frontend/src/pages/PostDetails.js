import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getIdPostData } from '../api/PostsApi';

export default function PostDetails() {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getPostData();
    }, []);

    const getPostData = async () => {
        const getIdPostResponse = await getIdPostData(id);
        console.log('getIdPostResponse', getIdPostResponse);
        setPost(getIdPostResponse.response);
    };

    if (!post) {
        return <p>Loading...</p>
    }

    const formattedDate = Intl.DateTimeFormat('en-US', {
        month: "long",
        day: "numeric",
        year: "numeric"
    }).format(new Date(post.createdAt));

    return (
        <main className="container my-4">
            <div className="row">
                <article className="col-lg-8">
                    <h2 className="blog-post-title">{post.title}</h2>
                    <p className="blog-post-meta">{formattedDate} by <a href="#">{post.author}</a></p>

                    <img className="mb-3 img-fluid" src={post.image} alt="" />
                    <div className="blog-post-content">
                        <p>{post.content}</p>
                    </div>
                </article>
            </div>
        </main>
    )
}
