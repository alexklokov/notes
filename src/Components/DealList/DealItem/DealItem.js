import './DealItem.css'



const DealItem = ({title, text, status}) => {

  return (
    <div className="deals__item">
      <div className="deals__content">
        <div className="deals__title">{title}</div>
        <div className="deals__text">{text}</div>
      </div>
      <div className="deals__status">{status}</div>
    </div>
  )
}

export default DealItem
