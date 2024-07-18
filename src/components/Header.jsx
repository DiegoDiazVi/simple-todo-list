import { useState } from 'react'

function Header({ onSubmit }) {
    const [text, setText] = useState('');

    const handlerChange = (e) => {
        setText(e.target.value)
    }

    return (
        <form  className='task-form' onSubmit={onSubmit}>
            <input className='task-form-input' name='input-task' type="text" placeholder='Ingresa tu tarea' value={text} onChange={handlerChange}/>
            <button className='task-form-button' type="submit"> Agregar tarea</button>
        </form>
    );
}

export default Header;