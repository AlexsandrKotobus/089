import React from "react";
import './post-list.css';


import PostListItem from "../post-list-item";
import {ListGroup} from "reactstrap";



// {posts} и onDelete - деструктур. props из app.js,
const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) =>{
   console.log(posts);
    const elements = posts.map((item)=>{
        //добавим id + остальные свойства
        //деструктуризируем объект item на id и rest-оператор объединяет все остальное
        const{id, ...itemProps} = item;
        return (
                // Этот вариант использует одинаковость названий свойств и значений
                <li key={id} className='list-group-item'> 
                    {/* так мы разворачиваем item  - остальные свойства без id*/}
                    <PostListItem 
                        {...itemProps}
                        // pros для удаления - внутрь поместим функцию
                        onDelete={()=> onDelete(id)}
                        onToggleImportant={()=>onToggleImportant(id)}
                        onToggleLiked={()=>onToggleLiked(id)}/>
                </li>
 
            )
        });
    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
       
    )
}
export default PostList;