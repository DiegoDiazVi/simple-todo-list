import { useState } from 'react'
import Form from './components/Header.jsx'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState(initialTasks)

  const handlerChange = (e) => {
    setText(e.target.value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks,
      {
        id: idNext++,
        task: e.target['input-task'].value,
        done: false
      }]
    )
  }

  const handlerEdit = (id) => {
    console.log(id)
  }

  const handlerDelete = (id) => {
    const filterTask = tasks.filter( task => task.id !== id )
    setTasks(filterTask)
  }

  return (
    <main>
      <Form text={text} onChange={handlerChange} onSubmit={handlerSubmit}/>
      <ul>
        {tasks.length > 0 && tasks.map(
          task => {
            return (
              <li className='task' key={task.id}>
                <input className='task-checkbox' name='input-check'type="checkbox" checked={task.done}/>
                <p className='task-description'>{task.task}</p>
                <button className='task-button edit' onClick={() => handlerEdit(task.id)}>Editar</button>
                <button className='task-button delete'onClick={() => handlerDelete(task.id)}>Eliminar</button>
              </li>
            )
          }
        )}
      </ul>
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
