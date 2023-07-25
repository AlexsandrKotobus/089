import React from 'react';

import AppHeader from '../app-header'; //БЕЗ доп файла index.js в папке app-header:  import AppHeader from '../app-header/app-header' 
import SearchPanel from '../search-panel';  //панель поиска
import PostStatusFilter from '../post-status-filter'; //фильтры
import PostList from '../post-list'; //список постов
import PostAddForm from '../post-add-form';  //поле ввода нового поста+кнопка сохранить
import "./app.css";   //импорт стилей
const App =() =>{
    return(
        //  дополнительная обертка -
    <div className='app'>   
        <AppHeader />
        {/* //обертка и строка поиска */}
        <div className='search-panel d-flex'>
            <SearchPanel />
            <PostStatusFilter/>
        </div>
            <PostList/>
            <PostAddForm/>
        </div>
    );
}
export default App;