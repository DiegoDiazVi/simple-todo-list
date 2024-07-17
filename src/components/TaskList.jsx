import TodoItem from "./TodoItem.jsx";

function TaskList({tasks, onClickEdit, onClickDelete }) {
    return (
        <ul>
            {tasks.length > 0 && tasks.map(
                task => {
                    return (
                        <TodoItem key={task.id} task={task} onClickEdit={onClickEdit} onClickDelete={onClickDelete} />
                    )
                }
            )}
        </ul>
    );
}

export default TaskList;