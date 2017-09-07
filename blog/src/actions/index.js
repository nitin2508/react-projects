export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_post';
export const FETCH_POST = 'fetch_posts';
export const DELETE_POSTS = 'delete_posts';
import axios from 'axios';
const request = axios.get();
const ROOT_URL ='https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=nitin123';

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type:FETCH_POSTS,
        payload:request
    };
}

export function createPost(values,callback){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
    .then(()=>{
        callback();
    })
    return {
        type:CREATE_POSTS,
        payload:request
    };
}

export function fetchPost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

    return{
        type:FETCH_POSTS,
        payload:request
    };
}

export function deletePost(id,callback){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(()=>{
        callback();
    })

    return{
        type:DELETE_POSTS,
        payload:id
    };
}
