import React,{useEffect,useState} from 'react';
import Post from "./Post";
import axios from "axios";

const Posts = () => {
    const [posts,setPosts]=useState([]);

    useEffect(() => {
        //fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(value => setPosts(value))
        axios.get('https://jsonplaceholder.typicode.com/posts').then(({data})=> setPosts(data))

    },[]);
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;