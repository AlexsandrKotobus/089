import React, {Component} from "react";
import './post-list-item.scss';

//создаем класс наследуемый из Component, React
export default class PostListItem extends Component {
    // stay для кнопки звезда
    constructor(props){
        console.log(props);
        // суперкоснстуктор с props
        super(props);
        this.state = {
            important: false,
            like: false
        };
        //привязываем обр событий
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }
    onImportant(){
        // только при помощи setState() можно изменять состояние компонента
        //this.setState(({important}) - деструктуризация нашего объекта state.important
        this.setState(({important})=>({
           important: !important 
        }))
    }
    onLike(){
        // только при помощи setState() можно изменять состояние компонента
        //this.setState(({like}) - деструктуризация нашего объекта state.like
        this.setState(({like})=>({
           like: !like
        }))

    }
    
    // создаем главный метод нашего класса
    render(){
        //используем props, которые приходят в наш класс и вытащим из них label, onDelete и проч.
        //это свойство будет приходить в каждый новосозданный компонент listItem
        const {label, onDelete} = this.props;
        const {important, like} = this.state;
        let classNames ='app-list-item d-flex justify-content-between'; //classNames -переменная содержащая все наши классы
        if (important){
            classNames +=" important"; //пробел перед important формирует строку правильно    
        }
        // и условие для лайков - добавляем стиль css
        if(like){
            classNames +=" like"; //пробел перед like формирует строку правильно
        }
        return(
            // весь элемент - пост
                <div className={classNames}>
                {/* текст поста */}
                <span className="app-list-item-label"
                onClick={this.onLike}
                >
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
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fa fa-trash-can"></i>
                    </button>
                    {/* сердечко */}
                    <i className="fa fa-heart"></i>
                </div>
                
            </div>
        )
    }
}




