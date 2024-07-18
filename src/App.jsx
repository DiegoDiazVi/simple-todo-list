import { useReducer } from 'react'
import Form from './components/Header.jsx'
import TaskList from './components/TaskList.jsx'
import { tasksReducer } from './reducers/tasksReducer.js'
import './App.css'

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch({
        type: 'add',
        id: idNext++,
        task: e.target['input-task'].value,
        done: false
    })
  }

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
    <main>
      <Form onSubmit={handlerSubmit}/>
      <TaskList tasks={tasks} onClickDelete={handlerDelete} onClickCheckbox={handlerCheckBox}/>
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
