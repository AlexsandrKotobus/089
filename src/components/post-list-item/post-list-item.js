import React from "react";
import './post-list-item.css';

const PostListItem =({label, important = false}) => {     //деструктурируем props чтоб вытащить оттуда label
    //устанавливаем дефолтьное значение important=false
//активность important
let classNames ='app-list-item d-flex justify-content-between'; //classNames -переменная содержащая все наши классы
if (important){
    classNames +=" important"; //пробел перед important формирует строку правильно    
}


    return (
        // весь элемент - пост
    <div className={classNames}>
        {/* текст поста */}
        <span className="app-list-item-label">
            {label}  {/* */}
        </span>
        {/* блок кнопок - звездочка и корзина */}
        <div className="d-flex justify-content-center align-item-center">
            {/* звездочка */}
            <button 
            type="button" 
            className="btn-star btn-sm">
                <i className="fa fa-star"></i>
            </button>
            {/* корзина */}
            <button 
            type="button" 
            className="btn-trash btn-sm">
                <i className="fa fa-trash-can"></i>
            </button>
            {/* сердечко */}
            <i className="fa fa-heart"></i>
        </div>
    </div>
    )
}
export default PostListItem;