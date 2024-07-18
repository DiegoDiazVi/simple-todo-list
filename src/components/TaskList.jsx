import { useTasks } from "../hooks/useTask.js";
import TodoItem from "./TodoItem.jsx";

function TaskList() {
    const tasks = useTasks();

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