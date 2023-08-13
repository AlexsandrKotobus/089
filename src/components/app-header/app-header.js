import React from 'react';
import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
// встроенный класс bootstrap
    display: flex;
    // из класса app-header.css
    align-items: flex-end;
    justify-content: space-between;
    h1{
         font-size: 26px;
         color: ${(props) => props.colored ? 'red' : 'green' };
         &:hover {color: blue;}
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
        &:hover{color: blue}
    } 
`
//сразу же деструктурируем prpos
const AppHeader =({liked, allPosts}) =>{
    return(
        <Header as ='a' >
            {/* <Header colored> такая запись равносильна <Header colored>= {true}  - но как редко пишут, некрасиво */}
            {/* пока статичная надпись */}
            <h1>Кот Елисей</h1>                            
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
}
export  default AppHeader;