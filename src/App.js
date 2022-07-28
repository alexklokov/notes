import logo from './logo.svg';
import './App.css';
import TaskList from './Components/TaskList/TaskList'
import AddTask from './Components/AddTask/AddTask'
import { useState } from 'react'


const App = () => {


  const createTask = (title, text) => {
    const time = new Date()
    return {
      id: time.getTime(),
      title,
      text,
      status: 0
    }
  }

  const [tasks, setTasks] = useState([])

  const addTask = (title, text) => {
    const newTask = createTask(title, text)
    setTasks([...tasks, newTask])
  }

  const changeStatus = (id, status) => {
    setTasks(tasks.map(task => {
      if(task.id === id) task.status = status
      return task
    }))
  }

  return (
    <div>
      <AddTask addTask={addTask}/>
      <TaskList tasks={tasks} changeStatus={changeStatus}/>
    </div>
  )
}

export default App;
