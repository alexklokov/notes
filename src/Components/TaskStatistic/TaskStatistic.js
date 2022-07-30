const TaskStatistic = ({tasksStatistic, statuses}) => {
  const not_complete = tasksStatistic.filter((task)=>{
    return task.status === 0
  })
  const complete = tasksStatistic.filter((task)=>{
    return task.status === 1
  })
  return (
    <div>
      Количество задач: {tasksStatistic.length} <br/>
      Количество невыполненных задач: {not_complete.length} <br/>
      Количество выполненных задач: {complete.length} <br/>
    </div>
  )
}

export default TaskStatistic
