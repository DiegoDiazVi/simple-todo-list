import { useContext } from "react";
import { TodoDispatchContext } from "../context/TodoContext";

function TodoItem({ task }) {
    const dispatch = useContext(TodoDispatchContext);

    const handlerDelete = (id) => {
        dispatch({
            type: 'delete',
            id: id
        })
    }

    const handlerCheckBox = (id, isDone) => {
        dispatch({
            type: 'changedCheckBox',
            id: id,
            isDone: isDone
        })
    }

    return (
        <li className='task'>
            <input
                className='task-checkbox'
                name='input-check'
                type="checkbox"
                checked={task.done}
                onChange={() => handlerCheckBox(task.id, task.done)}
            />
            <p className='task-description'>{task.task}</p>
            <button className='task-button delete'onClick={() => handlerDelete(task.id)}>Eliminar</button>
        </li>
    );
}

export default TodoItem;