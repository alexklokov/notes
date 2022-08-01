import { useState } from 'react'
import './TaskItem.css'


const TaskItem = ({task, completeTask, onChangeSelected, status}) => {


  const changeSelected = (e) => {
    onChangeSelected(task.id)
  }


  return (
    <div className={"tasks__item " + status.classes[task.status]}>
      <div>
        <input type="checkbox" id={task.id} className="checkbox" onChange={changeSelected} checked={task.is_selected}/>
        <label htmlFor={task.id} className="checkbox"></label>
      </div>
      <div className="tasks__content">
        <div className="tasks__title">{task.title}</div>
        <div className="tasks__text">{task.text}</div>
      </div>
      <div className="tasks__control">
        <div className="tasks__status">
          {status.labels[task.status]}
        </div>
        <div className="tasks__start" onClick={() => completeTask(task.id)}>

	</div>

      </div>
    </div>
  )
}

export default TaskItem
