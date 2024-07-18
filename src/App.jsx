import Header from './components/Header.jsx'
import TaskList from './components/TaskList.jsx'
import TodoProvider  from './context/TodoContext.jsx'
import './App.css'

function App() {
  return (
    <main>
      <TodoProvider>
          <Header />
          <TaskList />
      </TodoProvider>
    </main>
  )
}
export default App
