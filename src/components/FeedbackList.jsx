import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
import { v4 as uuidv4 } from 'uuid';

function FeedbackList({feedbacks, handleDel}) {
  if(!feedbacks || feedbacks.length === 0){
    return <p>No Feedback Yet</p>
  }
  
/*   return (
    <div className="feedback-list">   
     {feedbacks.map((item, idx)=>(
      <FeedbackItem key={idx} item={item} handleDel={handleDel}/>
    ))}
    </div>
  ) */
  return (
    <div className="feedback-list">  
    <AnimatePresence>
      {feedbacks.map((item, idx)=>(
        <motion.div key={uuidv4()} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
          <FeedbackItem key={idx} item={item} handleDel={handleDel}/>
        </motion.div>        
      ))}
    </AnimatePresence>

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