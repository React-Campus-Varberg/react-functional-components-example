import React from 'react';

function TodoItem() {
    const isCompleted = false;
    let done = '';

    if (isCompleted) {
        done = 'Klar';
    } else {
        done = 'Ej klar';
    }

    return (
        <li>Köp mjölk {done}</li>
    )
}

export default TodoItem;