import React from "react";
import './post-list.css';


import PostListItem from "../post-list-item";
import {ListGroup} from "reactstrap";



// {posts} и onDelete - деструктур. props из app.js,
const PostList = ({posts, onDelete}) =>{
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
                        onDelete={()=> onDelete(id)}/>
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
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
       
    )
}
export default PostList;