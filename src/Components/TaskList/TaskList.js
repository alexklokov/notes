import TaskItem from './TaskItem/TaskItem'
import './TaskList.css'

const TaskList = (props) => {

  const tasks = props.tasks.map((task, i) => {
    return (<TaskItem key={i} task={task} onChangeStatus={props.changeStatus}/>)
  })
  return (
    <div className="task-list">
    <div className="task-list__title">Список задач</div>
      {tasks}
    </div>
  )
}


export default TaskList
