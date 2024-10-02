import axios from 'axios';

const getAllPostsData = async () => {
    return await axios
        .get('http://localhost:8000/api/posts/get-all')
        .then((response) => {
            const resDate = {
                responseCode: response.status,
                response: response.data
            };
            return resDate;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        })
};

const getIdPostData = async (id) => {
    return await axios
        .get(`http://localhost:8000/api/posts/get/${id}`)
        .then((response) => {
            const respData = {
                responseCode: response.status,
                response: response.data
            };
            return respData;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        })
};

const getAllCategory = async (id) => {
    return await axios
        .get('http://localhost:8000/api/categories/get-all')
        .then((response) => {
            const respData = {
                responseCode: response.status,
                response: response.data
            };
            return respData;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        })
};

const getByCategoryId = async (id) => {
    return await axios
        .get(`http://localhost:8000/api/posts/category/${id}`)
        .then((response) => {
            const respData = {
                responseCode: response.status,
                response: response.data
            };
            return respData;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        })
};

const getAllCategoryIdData = async (id) => {
    return await axios
        .get(`http://localhost:8000/api/categories/get/${id}`)
        .then((response) => {
            const respData = {
                responseCode: response.status,
                response: response.data
            };
            return respData;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        })
};

export {
    getAllPostsData,
    getIdPostData,
    getAllCategory,
    getByCategoryId,
    getAllCategoryIdData
};