import { useContext } from "react";
import TodoItem from "./TodoItem.jsx";
import { TodoContext } from "../context/TodoContext.jsx";

function TaskList() {
    const tasks = useContext(TodoContext);

    return (
        <ul>
            {tasks.length > 0 && tasks.map(
                task => {
                    return (
                        <TodoItem key={task.id} task={task}/>
                    )
                }
            )}
        </ul>
    );
}

export default TaskList;