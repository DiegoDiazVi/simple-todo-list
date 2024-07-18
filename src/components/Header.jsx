import { useState } from 'react'
import { useDispatch } from '../hooks/useDispatch';

function Header() {
    const [text, setText] = useState('');
    const dispatch = useDispatch()

    const handlerChange = (e) => {
        setText(e.target.value)
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        let newTodo = e.target['input-task'].value
        if (newTodo.trim() === '') return
        dispatch({
            type: 'add',
            id: idNext++,
            task: newTodo,
            done: false
        })
    }

    return (
        <form  className='task-form' onSubmit={handlerSubmit}>
            <input className='task-form-input' name='input-task' type="text" placeholder='Ingresa tu tarea' value={text} onChange={handlerChange}/>
            <button className='task-form-button' type="submit"> Agregar tarea</button>
        </form>
    );
}

let idNext = 4
export default Header;