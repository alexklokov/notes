import DealItem from './DealItem/DealItem'
import './DealList.css'

const DealList = (props) => {
  const deals = props.deals.map((deal, i) => {
    return (<DealItem key={i} title={deal.title} text={deal.text} />)
  })
  return (
    <div>
      {deals}
    </div>
  )
}


export default DealList
