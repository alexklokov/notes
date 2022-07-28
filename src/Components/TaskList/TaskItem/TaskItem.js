import { useState } from 'react'
import './TaskItem.css'


const TaskItem = ({task, onChangeStatus}) => {
  const status_labels = ["Не выполнено", "В работе", "Выполнено"]
  const status_classes = ["not-complete", "in-work", "complete"]

  const btn_labels = ["Начать", "Завершить", "Завершено"]

  return (
    <div className={"tasks__item " + status_classes[task.status]}>
      <div className="tasks__content">
        <div className="tasks__title">{task.title}</div>
        <div className="tasks__text">{task.text}</div>
      </div>
      <div className="tasks__control">
        <div className="tasks__status">
          {status_labels[task.status]}
        </div>
        <div className="tasks__start btn" onClick={(e) => {
          if(task.status < status_labels.length - 1) {
            onChangeStatus(task.id, task.status + 1)
          }
          if(task.status === 2)
            e.target.remove()
        }}>{btn_labels[task.status]}</div>

      </div>
    </div>
  )
}

export default TaskItem
