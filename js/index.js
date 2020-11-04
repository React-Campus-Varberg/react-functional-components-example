import React from 'react';
import ReactDOM from 'react-dom';

import TodoItem from './TodoItem';
import imgUrl from '../img/Ada_Lovelace_portrait.jpg';

function App() {
    return (
        <article>
            <h1>Todo</h1>
            <img src={imgUrl} className="image" />
            <ul className="todo-list">
                <TodoItem item="Köp mjölk" done="false" />
                <TodoItem item="Köp tidning" done="true" />
                <TodoItem item="Köp kaffe" done="false" />
                <TodoItem item="Läs tidning" done="false" />
            </ul>
        </article>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));