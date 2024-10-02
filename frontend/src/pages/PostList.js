import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import { getAllCategory, getAllPostsData } from '../api/PostsApi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getPostData();
        getCategoryData();
    }, []);

    const getPostData = async () => {
        const getAllPostsResponse = await getAllPostsData();
        console.log('getAllPostsResponse', getAllPostsResponse);
        setPosts(getAllPostsResponse.response);
    };

    const getCategoryData = async () => {
        const getAllCategoryResponse = await getAllCategory();
        console.log('getAllCategoryResponse', getAllCategoryResponse);
        setCategories(getAllCategoryResponse.response);
    };

    return (
        <>
            <main>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="mb-4">Latest Posts</h1>
                            {posts.length > 0 ?
                                posts.map((postitem) => <Post post={postitem} />)
                                : <h4>No Posts available</h4>
                            }
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">About Me</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>

                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Categories</h5>
                                    <ul className="list-group">
                                        {categories.map(category => <li className="list-group-item"><Link to={`/posts/category/${category._id}`} className="text-black">{category.name}</Link></li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
