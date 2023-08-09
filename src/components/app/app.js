import React, {Component} from 'react';

import AppHeader from '../app-header'; //БЕЗ доп файла index.js в папке app-header:  import AppHeader from '../app-header/app-header' 
import SearchPanel from '../search-panel';  //панель поиска
import PostStatusFilter from '../post-status-filter'; //фильтры
import PostList from '../post-list'; //список постов
import PostAddForm from '../post-add-form';  //поле ввода нового поста+кнопка сохранить
import "./app.css";   //импорт стилей
// import style from './App.module.css'; //импорт  стиля из модуля
import styled from 'styled-components';

// создадим переменную в которую поместим тот элемент который хотим создать - div, a, section и так далее
const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;
const StyledAppBlock = styled(AppBlock)`
    background-color: grey;
`

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[
                {label: 'Я хочу есть', important: true, id: 'agwoug' },
                {label: 'Поиграй со мною', important: false, id: 'hb4ug'},
                {label: 'Спатоньки', important: false, id: '94865ff'},
                {label: 'почисть лоток', important: true, id: 'hb85g'}
            ]
        };
        // жестко привязываем наш метод к экземпляру класса
        this.deleteItem = this.deleteItem.bind(this); 
       
    }
// функция удаления 
deleteItem(id){
    this.setState(({data}) =>{
        // нам нужен параметр, который удаляется
        const index = data.findIndex(elem => elem.id === id);
        // мы разрежем массив slise - на до-удаляемого элемента и после
        //с помощью spread-оператора разворачиваем наши массивы и соединяем их
        const newArr = [...data.slice(0,index), ...data.slice(index+1)];
        return{
            // мы заменили новым массивом старый, а не изменяли его напряму
            data: newArr
        }
    })
}

    render(){
        return(
            //заменили div c кдассом стиля на компонент
        <StyledAppBlock>  
         {/* {style.app} - app - имя класса из файла, который нужен */}
            <AppHeader />
            {/* //обертка и строка поиска */}
            <div className='search-panel d-flex'>
                <SearchPanel />
                <PostStatusFilter/>
            </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}/>
                <PostAddForm/>
            </StyledAppBlock>
        );
    }
}