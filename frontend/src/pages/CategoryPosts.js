import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import { getAllCategory, getAllCategoryIdData, getByCategoryId } from '../api/PostsApi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

export default function CategoryPosts() {
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getCategoryIdData();
        getCategoryData();
    }, []);

    const getCategoryIdData = async () => {
        const getCategoryIdResponse = await getByCategoryId(id);
        console.log('getCategoryIdResponse', getCategoryIdResponse);
        setPosts(getCategoryIdResponse.response);
    };

    const getCategoryData = async () => {
        const getAllCategoryIdResponse = await getAllCategoryIdData(id);
        console.log('getAllCategoryIdResponse', getAllCategoryIdResponse);
        setCategory(getAllCategoryIdResponse.response);
    };

    if (!category) {
        return <h3>Loading...</h3>
    }

    return (
        <>
            <main>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="mb-4">{category.name}</h1>

                            {posts.length > 0 ?
                                posts.map((postitem) => <Post post={postitem} />)
                                : <h4>No Posts available</h4>
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
