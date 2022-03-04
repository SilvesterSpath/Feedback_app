import Card from "../shared/Card"
import PropTypes from 'prop-types'

function FeedbackItem({item}) {
  return (    
     <Card >
      <div className="num-display">{item.rating}</div>  
      <div className="text-display">{item.text}</div>      
    </Card>
  )
}

Card.defaultProps = {
  reverse: false
}

Card.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem