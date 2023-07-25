import React from "react";
const PostListItem =()=>{
    return (
        // весь элемент - пост
    <li className = "app-list-item d-flex justify-content-between">
        {/* текст поста */}
        <span className="app-list-item-label">
            Hello world!
        </span>
        {/* блок кнопок - звездочка и корзина */}
        <div className="d-flex justify-content-center align-item-center">
            {/* звещдочка */}
            <button className="btn-star btn-sm">
                <i className="fa fa-star"></i>
            </button>
            {/* корзина */}
            <button className="btn-trash btn-sm">
                <i className="fa fa-trash-can"></i>
            </button>
            {/* сердечко */}
            <i className="fa fa-heart"></i>
        </div>
    </li>
        )
}
export default PostListItem;