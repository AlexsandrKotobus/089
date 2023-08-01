import React, {Component} from "react";
import './post-list-item.css';

//создаем класс наследуемый из Component, React
export default class PostListItem extends Component {
    // stay для кнопки звезда
    constructor(props){
        // суперкоснстуктор с props
        super(props);
        this.state = {
            important: false
        };
        //привязываем обр событий
        this.onImportant = this.onImportant.bind(this);
    }
    onImportant(){
        // только при помощи setState() можно изменять состояние компонента
        //this.setState(({important}) - деструктуризация нашего объекта state.important
        this.setState(({important})=>({
           important: !important 
        }))

    }
    
    // создаем главный метод нашего класса
    render(){
        //используем props, которые приходят в наш класс и вытащим из них label и important
        //это свойство будет приходить в каждый новосозданный компонент listItem
        const {label} = this.props;
        const {important} = this.state;
        let classNames ='app-list-item d-flex justify-content-between'; //classNames -переменная содержащая все наши классы
        if (important){
            classNames +=" important"; //пробел перед important формирует строку правильно    
        }
        return(
            // весь элемент - пост
                <div className={classNames}>
                {/* текст поста */}
                <span className="app-list-item-label">
                    {label}  {/* */}
                </span>
                {/* блок кнопок - звездочка и корзина */}
                <div className="d-flex justify-content-center align-item-center">
                    {/* звездочка */}
                    <button 
                    type="button" 
                    className="btn-star btn-sm"
                    onClick={this.onImportant}>
                        
                        <i className="fa fa-star"></i>
                    </button>
                    {/* корзина */}
                    <button 
                    type="button" 
                    className="btn-trash btn-sm">
                        <i className="fa fa-trash-can"></i>
                    </button>
                    {/* сердечко */}
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}




