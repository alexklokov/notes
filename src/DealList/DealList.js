
const DealList = ({ params, handler }) => {

  return (
    <div onClick={handler}>
      { params }
    </div>
  )
}


export default DealList
