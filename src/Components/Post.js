import React from 'react';

const Post = ({post}) => {
    const {id, title,body}= post;
    const click = {postId}=>{
        console.log(postId);
    }
    return (
        <div>
            <br/>
            <div>id:{id}</div>

            <div>title:{title}</div>

            <div>body:{body}</div>
            <button onClick={()=> click(id)}> INFO</button>
        </div>
    );
};

export default Post;