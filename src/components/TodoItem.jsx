function TodoItem({task, onClickEdit, onClickDelete}) {
    return (
        <li className='task'>
            <input className='task-checkbox' name='input-check'type="checkbox" checked={task.done}/>
            <p className='task-description'>{task.task}</p>
            <button className='task-button edit' onClick={() => onClickEdit(task.id)}>Editar</button>
            <button className='task-button delete'onClick={() => onClickDelete(task.id)}>Eliminar</button>
        </li>
    );
}

export default TodoItem;