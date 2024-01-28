import React,{useEffect,useState} from 'react';
import Post from "./Post";


import {postServise} from "../Servises/postServise";
import PostDetails from "./PostDetails/PostDetails";

const Posts = () => {
    const [posts,setPosts]=useState([]);
    const [postDetails, setPostDetails]= useState(null)
    const click= async (postId) =>{
        const {data} = await postServise.getById(postId);
        setPostDetails(data)
    }

    useEffect(() => {
        //fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(value => setPosts(value))
        //axiosServise.get('/posts').then(({data})=> setPosts(data))
        postServise.getAll().then(({data})=>setPosts(data))

    },[])
    return (
        <div>


        <div>
            {posts.map(post=><Post key={post.id} post={post} click={click}/>)}
        </div>
            {
                postDetails && <PostDetails postDetails={postDetails}/>
            }
</div>
    );
};

export default Posts;