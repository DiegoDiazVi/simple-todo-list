function TaskList({tasks, onClickEdit, onClickDelete }) {
    return (
        <ul>
            {tasks.length > 0 && tasks.map(
                task => {
                    return (
                    <li className='task' key={task.id}>
                        <input className='task-checkbox' name='input-check'type="checkbox" checked={task.done}/>
                        <p className='task-description'>{task.task}</p>
                        <button className='task-button edit' onClick={() => onClickEdit(task.id)}>Editar</button>
                        <button className='task-button delete'onClick={() => onClickDelete(task.id)}>Eliminar</button>
                    </li>
                    )
                }
            )}
        </ul>
    );
}

export default TaskList;