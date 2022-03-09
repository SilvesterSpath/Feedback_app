import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

function FeedbackList({feedbacks, handleDel}) {
  if(!feedbacks || feedbacks.length === 0){
    return <p>No Feedback Yet</p>
  }
  
  return (
    <div className="feedback-list">   
     {feedbacks.map((item, idx)=>(
      <FeedbackItem key={idx} item={item} handleDel={handleDel}/>
    ))}
    </div>

  )
}

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  )
}

export default FeedbackList