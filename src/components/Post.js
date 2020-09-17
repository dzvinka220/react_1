import React from "react";


const Post =(props) =>{
    return (
        <div className="post">
            <img className="avatar" src={props.photo} alt='huina'></img>
            <span className="name">{props.name} </span>
            <span className="nickname"> {props.nickname} • </span>
            <span className="date">{props.date}</span><br/>
            <div className="content">{props.content} </div>
            <img className="image" src={props.image} alt='post-img'></img>
            
        </div>
    )
}


export default Post;