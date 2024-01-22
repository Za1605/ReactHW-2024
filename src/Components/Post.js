import React from 'react';

const Post = ({post}) => {
    const {id, title,body}= post;
    return (
        <div>
            <br/>
            <div>id:{id}</div>

            <div>title:{title}</div>

            <div>body:{body}</div>
            <button onClick={'Details'}/>
        </div>
    );
};

export default Post;