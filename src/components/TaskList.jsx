import TodoItem from "./TodoItem.jsx";

function TaskList({tasks, onClickEdit, onClickDelete, onClickCheckbox }) {
    return (
        <ul>
            {tasks.length > 0 && tasks.map(
                task => {
                    return (
                        <TodoItem
                            key={task.id}
                            task={task}
                            onClickEdit={onClickEdit}
                            onClickDelete={onClickDelete}
                            onClickCheckbox={onClickCheckbox}
                        />
                    )
                }
            )}
        </ul>
    );
}

export default TaskList;