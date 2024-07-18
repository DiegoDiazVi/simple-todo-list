import { useReducer } from "react";
import { createContext } from "react";
import { tasksReducer } from '../reducers/tasksReducer.js'

export const TodoContext = createContext(null)
export const TodoDispatchContext = createContext(null)

export default function TodoProvider({ children }) {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
    return (
        <TodoContext.Provider value={tasks}>
            <TodoDispatchContext.Provider value={dispatch}>
                { children }
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
}

const initialTasks = [
    { id: 0, task: 'Levantarme', done: true },
    { id: 1, task: 'Bañarme', done: false },
    { id: 2, task: 'Asearme', done: false },
    { id: 3, task: 'Desayunar', done: false },
]