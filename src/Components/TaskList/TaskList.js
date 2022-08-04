import TaskItem from './TaskItem/TaskItem'
import './TaskList.css'

const TaskList = ({selectAll, removeSelected, tasks, task_date}) => {
  return (
    <div className="task-list">
    <div className="task-list__title">Список задач на {task_date()}</div>
      <div className="task-list__btn-wrapper">
        <div className="btn" onClick={selectAll}>Выделить все</div>
        <div className="btn" onClick={removeSelected}>Удалить</div>
      </div>
      {tasks}
    </div>
  )
}


export default TaskList
