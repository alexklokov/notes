import './TaskStatistic.sass'

const TaskStatistic = ({tasksStatistic, statuses}) => {
  const not_complete = tasksStatistic.filter((task)=>{
    return task.status === 0
  })
  const complete = tasksStatistic.filter((task)=>{
    return task.status === 1
  })
  return (
    <div className="statistic-wrapper">
      Количество задач: <span class="statistic-wrapper__number"> {tasksStatistic.length} </span> <br/>
      Количество невыполненных задач: <span class="statistic-wrapper__number"> {not_complete.length} </span><br/>
      Количество выполненных задач: <span class="statistic-wrapper__number"> {complete.length} </span>
    </div>
  )
}

export default TaskStatistic
