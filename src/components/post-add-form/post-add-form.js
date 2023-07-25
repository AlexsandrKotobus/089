import React from "react";
import './post-add-form.css';

const PostAddForm =()=>{
   return (
    <form className="bottom-panel d-flex">
        {/* поле ввода поста */}
        <input
            type="text"
            placeholder="О чем вы думаете сейчас"
            className="form-control new-post-label"
        />
        {/* кнопка сохранения поста */}
        <button
        type="submit"
        className="btn btn-outline-secondary">
        Добавить пост</button>

    </form>

   ) 
}
export default PostAddForm;