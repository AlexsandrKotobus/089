import React from 'react';
import './app-header.css';
const AppHeader =() =>{
    return(
        <div className='app-header d-flex'>
            {/* пока статичная надпись */}
            <h1>Кот Елисей</h1>                            
            <h2>5 записей, из них понравилось 0</h2>
        </div>
    )
}
export  default AppHeader;