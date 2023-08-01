import React from "react";
import './post-list.css';


import PostListItem from "../post-list-item";



// {posts} - деструктур. props из app.js
const PostList = ({posts}) =>{
   console.log(posts);
    const elements = posts.map((item)=>{
        //деструктуризируем объект item на id и rest-оператор объединяет все остальное
        const{id, ...itemProps} = item;
        return (
                // Этот вариант использует одинаковость названий свойств и значений
                <li key={id} className='list-group-item'> 
                    {/* так мы разворачиваем item */}
                    <PostListItem {...itemProps}/>
                    
                </li>
                // // классический вариант
                // //key - формируем ключ
                //  <li key={item.id} className='list-group-item'> 
                //  {/* наш отдельный пост */}
                //  <PostListItem 
                //  // так как мы map наш массив item попадает в каждый элемент нашего массива
                //  // чтобы получить каждый Label из этого item можно написать item.posts и item.important
                //  label={item.label} 
                //  important={item.important}/>
                //  </li>
 
        )
    });
    return (
        <ul className="app-list list-group"  >
        console.log(elements);
           {elements}
           {/* ниже - неправильный, но работающий вариант */}
           {/* <PostListItem label={posts[0].label} important={posts[0].important}/>
           <PostListItem label={posts[1].label} important={posts[1].important}/>
           <PostListItem label={posts[2].label} important={posts[2].important}/> */}
        </ul>
    )
}
export default PostList;