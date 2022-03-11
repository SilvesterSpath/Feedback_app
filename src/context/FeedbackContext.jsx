import {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedbacks, setFeedbacks] = useState([{
    id: 1,
    text: 'This item is from context',
    rating: 7
  }])

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = parseInt(uuidv4());
    feedbacks.push(newFeedback);
    setFeedbacks([newFeedback, ...feedbacks]);
    console.log(feedbacks);
  };
 
  return <FeedbackContext.Provider value={{
    feedbacks,
    deleteFeedback,
    addFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext