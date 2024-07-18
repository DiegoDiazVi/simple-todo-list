function TodoItem({task, onClickDelete, onClickCheckbox }) {


    return (
        <li className='task'>
            <input
                className='task-checkbox'
                name='input-check'
                type="checkbox"
                checked={task.done}
                onChange={() => onClickCheckbox(task.id, task.done)}
            />
            <p className='task-description'>{task.task}</p>
            <button className='task-button delete'onClick={() => onClickDelete(task.id)}>Eliminar</button>
        </li>
    );
}

export default TodoItem;