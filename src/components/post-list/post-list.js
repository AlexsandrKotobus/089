import React from "react";
import './post-list.css';


import PostListItem from "../post-list-item";



// {posts} - деструктур. props из app.js
const PostList = ({posts}) =>{
   console.log(posts);
    const elements = posts.map((item)=>{
        return (
                // так как в ul - это будет li
                <li className='list-group-item'> 
                    {/* так мы разворачиваем item */}
                    <PostListItem {...item}/>
                </li>
        )
    });
    return (
        <ul className="app-list list-group"  >
           {elements}
           {/* ниже - неправильный, но работающий вариант */}
           {/* <PostListItem label={posts[0].label} important={posts[0].important}/>
           <PostListItem label={posts[1].label} important={posts[1].important}/>
           <PostListItem label={posts[2].label} important={posts[2].important}/> */}
        </ul>
    )
}
export default PostList;