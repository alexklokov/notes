import { useState } from 'react'
import './TaskItem.css'


const TaskItem = ({task, onChangeStatus, onChangeSelected, status}) => {


  const changeSelected = (e) => {
    onChangeSelected(task.id)
  }

  const changeStatus = (e) => {
    if(task.status < status.labels.length - 1) {
      onChangeStatus(task.id, task.status + 1)
    }
    if(task.status === status.labels.length - 1)
      e.target.remove()
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
        <div className="tasks__start btn" onClick={changeStatus}></div>

      </div>
    </div>
  )
}

export default TaskItem
