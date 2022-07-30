import TaskItem from './TaskItem/TaskItem'
import './TaskList.css'

const TaskList = ({selectAll, removeSelected, tasks}) => {
  return (
    <div className="task-list">
    <div className="task-list__title">Список задач</div>
      <div className="btn" onClick={selectAll}>Выделить все</div>
      <div className="btn" onClick={removeSelected}>Удалить</div>
      {tasks}
    </div>
  )
}


export default TaskList
