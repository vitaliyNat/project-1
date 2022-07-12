import React, { useState } from "react";
import MyButton from "./UI/button/button";

const Post =  (props) => {
    return(
        <div className="HowItSee">
            <div className="posts">
            <h4>{props.number}. {props.post.title}</h4>
            <hr />
            <p>{props.post.body}</p>
            <div style={{textAlign:"right"}}><MyButton  onClick={() => props.remove(props.post)}>Delete</MyButton>
            </div>
            </div>
            </div>
    )
}
export default Post;