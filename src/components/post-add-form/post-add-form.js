﻿import React from "react";
import './post-add-form.css';

const PostAddForm =({onAdd})=>{
   return (
    <div className="bottom-panel d-flex">
        {/* поле ввода поста */}
        <input
            type="text"
            placeholder="О чем вы думаете сейчас"
            className="form-control new-post-label"
        />
        {/* кнопка сохранения поста */}
        <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={()=> onAdd('Hello')}>
        Добавить пост</button>

    </div>

   ) 
}
export default PostAddForm;