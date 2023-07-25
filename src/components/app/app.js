import React from 'react';

import AppHeader from '../app-header'; //БЕЗ доп файла index.js в папке app-header:  import AppHeader from '../app-header/app-header' 
import SearchPanel from '../search-panel';  //панель поиска
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list'; //список постов

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
        <div>
            <PostList/>
        </div>

    </div>
    );
}
export default App;