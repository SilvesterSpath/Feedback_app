import PropTypes from 'prop-types'

function FeedbackStats({feedbacks}) {  
  // Calculate sum
  const average = (feedbacks.reduce((accum, curr)=> accum + curr.rating, 0) / feedbacks.length).toFixed(1).replace(/[.,]0$/, '')
    
  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average} </h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedbacks: PropTypes.array.isRequired
}

export default FeedbackStats