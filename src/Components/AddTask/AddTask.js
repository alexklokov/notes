import { useState } from 'react'
import './AddTask.sass'

const AddTask = (props) => {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const changeText = (e) => {
    setText(e.target.value)
  }

  const saveTask = () => {
    if(title==="" || text===""){
      return
    }
    props.addTask(title, text)
    setTitle("")
    setText("")
  }
  return (
    <div className="add-tasks-wrapper">
      <input type="text" name="title" id="title" className="input block" placeholder="Введите заголовок" onChange={changeTitle} value={title}/>
      <textarea name="text" id="text" className="input block" placeholder="Введите текст" onChange={changeText} value={text}></textarea>


      <div className="btn" onClick={saveTask}>Добавить</div>
    </div>
  )
}


export default AddTask
