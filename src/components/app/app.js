import React from 'react';

import AppHeader from '../app-header'; //БЕЗ доп файла index.js в папке app-header:  import AppHeader from '../app-header/app-header' 
import SearchPanel from '../search-panel';  //панель поиска
import PostStatusFilter from '../post-status-filter'; //фильтры
import PostList from '../post-list'; //список постов
import PostAddForm from '../post-add-form';  //поле ввода нового поста+кнопка сохранить
import "./app.css";   //импорт стилей

const App =() =>{
    //данные для постов (имитация с сервера)
    const data = [
        {label: 'Я хочу есть', important: true, id: 'agwoug' },
        {label: 'Поиграй со мною', important: false, id: 'hb4ug'},
        {label: 'Спатоньки', important: false, id: '94865ff'},
        {label: 'почисть лоток', important: true, id: 'hb85g'}
    ]
    return(
        //  дополнительная обертка -
    <div className='app'>   
        <AppHeader />
        {/* //обертка и строка поиска */}
        <div className='search-panel d-flex'>
            <SearchPanel />
            <PostStatusFilter/>
        </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    );
}
export default App;