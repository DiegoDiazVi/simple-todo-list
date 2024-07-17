export function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'add':
            return [...tasks,
            {
                id: action.id,
                task: action.task,
                done: action.done
            }
            ]
        case 'delete':
            return tasks.filter(task => task.id !== action.id);
        case 'changedCheckBox': {
            const updatedTasks = tasks.map(task => {
                if (task.id === action.id) {
                    return { ...task, done: !action.isDone }
                }
                return task;
            });
            return updatedTasks;
        }
        default:
            throw new Error('Action not defined');
    }
}