import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState(initialTasks)

  const handlerChange = (e) => {
    setText(e.target.value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <main>
      <form  className='task-form' onSubmit={handlerSubmit}>
        <input className='task-form-input' name='input-task' type="text" placeholder='Ingresa tu tarea' value={text} onChange={handlerChange}/>
        <button className='task-form-button' type="submit"> Agregar tarea</button>
      </form>
      <ul>
        {tasks.length > 0 && tasks.map(
          task => {
            return (
              <li className='task' key={task.id}>
                <input className='task-checkbox' name='input-check'type="checkbox" checked={task.done}/>
                <p className='task-description'>{task.task}</p>
                <button className='task-button edit'>Editar</button>
                <button className='task-button delete'>Eliminar</button>
              </li>
            )
          }
        )}
      </ul>
    </main>
  )
}

const initialTasks = [
  { id: 0, task: 'Levantarme', done: true },
  { id: 1, task: 'Bañarme', done: false },
  { id: 2, task: 'Asearme', done: false },
  { id: 3, task: 'Desayunar', done: false },
]

export default App
