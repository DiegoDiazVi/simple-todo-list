import { useState } from 'react';

function TodoItem({task, onClickEdit, onClickDelete, onClickCheckbox, onChangeText}) {
    const [isEditing, setIsEditing] = useState(false);

    const handlerClickEdit = (id) => {
        setIsEditing(!isEditing)
        onClickEdit(id)
    }

    return (
        <li className='task'>
            {isEditing ?
                <>
                    <input className='task-input-edit' type="text" value={task.task}/>
                    <button className='task-save' >Guardar</button>
                </>
                :
                <>
                    <input
                        className='task-checkbox'
                        name='input-check'
                        type="checkbox"
                        checked={task.done}
                        onChange={() => onClickCheckbox(task.id, task.done)}
                    />
                    <p className='task-description'>{task.task}</p>
                    <button className='task-button edit' onClick={() => handlerClickEdit(task.id, task.task)}>Editar</button>
                    <button className='task-button delete'onClick={() => onClickDelete(task.id)}>Eliminar</button>
                </>
            }
        </li>
    );
}

export default TodoItem;