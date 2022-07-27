import logo from './logo.svg';
import './App.css';
import DealList from './DealList/DealList'
import { useState } from 'react'

const App = () => {
  /*
  [data, func]
  data - это данные. Мы можем их только читать. Изменять не можем!!!!
  func(Новые данные) -> тогда data изменится
  */
  const [deals, setDeals] = useState(0)

  const addOne = () => {
    setDeals(deals + 1)
  }

  const flush = () => {
    setDeals(0)
  }

  return (
    <div>
      <DealList params={deals} handler={addOne}/>
      <div className="m20">
        <div className="btn" onClick={addOne}>Click</div>
        <div className="btn" onClick={flush}>Flush</div>
      </div>
    </div>
  )
}

export default App;
