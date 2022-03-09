import Card from "../shared/Card"
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({item, handleDel}) {


  return (    
     <Card >
      <div className="num-display">{item.rating}</div>
      <button onClick={()=> handleDel(item.id)} className="close">
        <FaTimes color='purple'/>
      </button>
      <div className="text-display">{item.text}</div>      
    </Card>
  )
}

Card.defaultProps = {
  reverse: false
}

Card.propTypes = {
  item: PropTypes.object
}

export default FeedbackItem