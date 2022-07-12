import React, {useState} from "react";
import MyButton from "./UI/button/button";

const PostForm = ({create}) => {
    const [post,setPost] = useState({title:'', body:''})
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost={
            ...post, id:Date.now()
        }
        create(newPost)
        setPost({title: '', body:''})

    }
    
    return(
        <form>
        <h1>Write a Post</h1>
        <h2>Title</h2>
        <input
         value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
          />
          <br></br>
        <h3>Message</h3>
        <input 
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
         /><br></br>
        <MyButton onClick={addNewPost}> Create a Post </MyButton>
        </form>
    )
}
export default PostForm;