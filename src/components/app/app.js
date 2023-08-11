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
    // background-color: grey;
`

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[
                {label: 'Я хочу есть', important: true, id: 1 },
                {label: 'Поиграй со мною', important: false, id: 2},
                {label: 'Спатоньки', important: false, id: 3},
                {label: 'почисть лоток', important: true, id: 4}
            ]
        };
        // жестко привязываем наш метод к экземпляру класса
        this.deleteItem = this.deleteItem.bind(this); 
        this.addItem = this.addItem.bind(this); 
        //значение id с которого мы начнем их генерировать (4 имеющихся элемента +1)
        this.maxId = 5;
       
    }
    // функция удаления 
    deleteItem(id){
        this.setState(({data}) =>{
            // находим индекс параметра, который удаляется
            const index = data.findIndex(elem => elem.id === id);
            // мы разрежем массив slice - на до-удаляемого элемента и после
            //с помощью spread-оператора разворачиваем наши массивы и соединяем их
            const newArr = [...data.slice(0,index), ...data.slice(index+1)];
            return{
                // мы заменили новым массивом старый, а не изменяли его напряму
                data: newArr
            }
        })
    }
    //функция добавления поста
    addItem(body){

        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return{
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
                <PostAddForm 
                    onAdd={this.addItem}/>
            </StyledAppBlock>
        );
    }
}