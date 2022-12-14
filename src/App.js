  import logo from './logo.svg';
import './App.css';
import TaskList from './Components/TaskList/TaskList'
import TaskItem from './Components/TaskList/TaskItem/TaskItem'
import AddTask from './Components/AddTask/AddTask'
import TaskStatistic from './Components/TaskStatistic/TaskStatistic'
import { useState } from 'react'


const App = () => {
  const statuses = {
    default: 0,
    labels: ["Не выполнено", "Выполнено"],
    classes: ["not-complete", "complete"],
  }

  const createTask = (title, text) => {
    const time = new Date()
    const day = `${time.getDate()}`.padStart(2, '0')
    const month = `${time.getMonth()+1}`.padStart(2, '0')
    const year = `${time.getFullYear()}`
    const hour = `${time.getHours()}`
    const minutes = `${time.getMinutes()}`
    const seconds = `${time.getSeconds()}`
    const date = `${day}.${month}.${year} ${hour}:${minutes}:${seconds}`
    return {
      id: time.getTime(),
      date,
      title,
      text,
      status: statuses.default,
      is_selected: 0
    }
  }

  const [tasks, setTasks] = useState([])

  const addTask = (title, text) => {
    const newTask = createTask(title, text)
    setTasks([...tasks, newTask])
  }

  const completeTask = (id) => {
    setTasks(tasks.map(task => {
      if(task.id === id) task.status = 1
      return task
    }))
  }

  const selectAll = () => {
    const is_find = tasks.find((task) => {
      return !task.is_selected
    }) ? true : false
    setTasks(tasks.map((task) => {
      task.is_selected = is_find
      return task
    }))
  }

  const changeSelected = (id) => {
    setTasks(tasks.map(task => {
      if(task.id === id) task.is_selected = !task.is_selected
      return task
    }))
  }

  const removeSelected = () => {
    setTasks(tasks.filter(task => {
      return !task.is_selected
    }))
  }

  const task_items = tasks.map((task, i) => {
    return (<TaskItem key={i}
                      task={task}
                      status={statuses}
                      onChangeSelected={changeSelected}
                      completeTask={completeTask}
            />)
  })

  const task_date = () => {
    const time = new Date()
    const day = `${time.getDate()}`.padStart(2, '0')
    const month = time.getMonth()
    const year = `${time.getFullYear()}`
    const monthes = [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря"
    ]

    const date = `${day} ${monthes[month]} ${year}`
    return date
  }

  return (
    <div>
      <div className='header'>
        <AddTask addTask={addTask}/>
        <TaskStatistic
              tasksStatistic={tasks}
              statuses={statuses}
        />
      </div>

      <TaskList
          task_date={task_date}
          tasks={task_items}
          selectAll={selectAll}
          removeSelected={removeSelected}
      />

    </div>
  )
}

export default App;
