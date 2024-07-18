import { useReducer } from 'react'
import Form from './components/Header.jsx'
import TaskList from './components/TaskList.jsx'
import { tasksReducer } from './reducers/tasksReducer.js'
import './App.css'
import { TodoContext, TodoDispatchContext } from './context/TodoContext.jsx'

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  const handlerSubmit = (e) => {
    e.preventDefault();
    let newTodo = e.target['input-task'].value
    if (newTodo.trim() === '') return
    dispatch({
        type: 'add',
        id: idNext++,
        task: newTodo,
        done: false
    })
  }


  return (
    <main>
      <TodoContext.Provider value={tasks}>
          <TodoDispatchContext.Provider value={dispatch}>
            <Form onSubmit={handlerSubmit}/>
            <TaskList />
          </TodoDispatchContext.Provider>
      </TodoContext.Provider>
    </main>
  )
}
let idNext = 4
const initialTasks = [
  { id: 0, task: 'Levantarme', done: true },
  { id: 1, task: 'Bañarme', done: false },
  { id: 2, task: 'Asearme', done: false },
  { id: 3, task: 'Desayunar', done: false },
]

export default App
