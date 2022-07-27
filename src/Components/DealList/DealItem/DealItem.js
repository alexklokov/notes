

const DealItem = ({title, text}) => {
  return (
    <div className="deals__item">
      <div className="deals__title">{title}</div>
      <div className="deals__text">{text}</div>
    </div>
  )
}

export default DealItem
