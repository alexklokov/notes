import { useState } from 'react'
import './AddDeal.css'

const AddDeal = (props) => {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const changeText = (e) => {
    setText(e.target.value)
  }

  const saveDeal = () => {
    props.addDeal(title, text)
    setTitle("")
    setText("")
  }
  return (
    <div>
      <input type="text" name="title" id="title" className="input block" onChange={changeTitle} value={title}/>
      <textarea name="text" id="text" className="input block" onChange={changeText} value={text}></textarea>


      <div className="btn" onClick={saveDeal}>Добавить</div>
    </div>
  )
}


export default AddDeal
