import React,{useEffect,useState} from 'react';
import Post from "./Post";


import {postServise} from "../Servises/postServise";

const Posts = () => {
    const [posts,setPosts]=useState([]);

    useEffect(() => {
        //fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(value => setPosts(value))
        //axiosServise.get('/posts').then(({data})=> setPosts(data))
        postServise.getAll().then(({data})=>setPosts(data))

    },[]);
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;