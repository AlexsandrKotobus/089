﻿import React  from 'react';
import { Button } from 'reactstrap';
import './post-status-filter.css'

const PostStatusFilter = ()=>{
    return (
        <div className='btn-group'>
            {/* использование компонента со стилем bootstrap */}
            <Button color='info'>ALL</Button>
            <button type='button' className='btn btn-info'>Все</button>
            <button type='button' className='btn btn-outline-secondary'>Понравилось</button>            
        </div>
    )
}

export default PostStatusFilter;