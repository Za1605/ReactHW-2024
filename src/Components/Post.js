

const Post = ({post,click})=>{
    const {id, name, title}= post;



    return(
        <div>
          <div>id:{id}</div>
            <div> name:{name}</div>
            <div> title: {title}</div>
            <button onClick={() => click(id)}> INFO</button>


        </div>
    )
 }

export default Post;