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
                {label: 'Я хочу есть', important: true, like: false, id: 1 },
                {label: 'Поиграй со мною', important: false, like: false, id: 2},
                {label: 'Спатоньки', important: false, like: false, id: 3},
                {label: 'почисть лоток', important: true, like: false, id: 4}
            ]
        };
        // жестко привязываем наш метод к экземпляру класса
        this.deleteItem = this.deleteItem.bind(this); 
        this.addItem = this.addItem.bind(this); 
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        
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
    onToggleImportant(id){
        console.log(`important ${id}`);
    }
    onToggleLiked(id){
        //деструктурируем state.data в {data}//потому что {data} = (state.data)
       this.setState(({data})=>{
        //находим индекс лайкнутого элемента
        const index = data.findIndex(elem=>elem.id===id);
        //получаем весь элемент по индексу
        const old = data[index];
        //spread-оператором разворачиваем объект и меняем ему свойство like на противоположное
        const newItem = {...old, like: !old.like};
        //создаем новый массив с 1часть старый+измененный элемент+конец старого массива
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
        //перезаписываем измененный массив
        return {data: newArr} 
       })
    }

    render(){
        const {data} = this.state;
        //В перем liked отфильтровываем только те посты, у которых like = true
        //filter отдает новый массив, длину которого мы измерили
        const liked =  data.filter(item =>item.like).length;
        const allPosts =   data.length;
        return(
            //заменили div c кдассом стиля на компонент
        <StyledAppBlock>  
         {/* {style.app} - app - имя класса из файла, который нужен */}
            <AppHeader 
             liked = {liked}
             allPosts = {allPosts}/>
            {/* //обертка и строка поиска */}
            <div className='search-panel d-flex'>
                <SearchPanel />
                <PostStatusFilter/>
            </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm 
                    onAdd={this.addItem}/>
            </StyledAppBlock>
        );
    }
}