import logo from './logo.svg';
import './App.css';
import DealList from './Components/DealList/DealList'
import AddDeal from './Components/AddDeal/AddDeal'
import { useState } from 'react'


const App = () => {
  const createDeal = (title, text) => {
    return {
      title,
      text,
      status: "Не выполнено"
    }
  }
  /*
  const a = [1, 2, 3]
  const b = [...a, 5]
  b = [1,2,3,5]
  */
  const [deals, setDeals] = useState([])

  const addDeal = (title, text) => {
    const newDeal = createDeal(title, text)
    setDeals([...deals, newDeal])
  }

  return (
    <div>
      <AddDeal addDeal={addDeal}/>
      <DealList deals={deals}/>
    </div>
  )
}

export default App;
