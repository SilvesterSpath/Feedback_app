import {createContext, useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedbacks, setFeedbacks] = useState([{
    id: 1,
    text: 'This item is from context',
    rating: 7
  },
  {
    id: 2,
    rating: 9,
    text: 'Feedback item 2 is from context',
  },
  {
    id: 3,
    rating: 5,
    text: 'Feedback item 3 is from context',
  },
])

  const [feedbackEditState, setFeedbackEditState] = useState({
    item: {},
    edit: false
  })

  useEffect(()=>{
    getFeedbacks()
  }, [])

  // Get feedbacks
  const getFeedbacks = async ()=>{
    const feedbacks = await axios.get('http://localhost:5000/feedback')
    console.log(feedbacks.data)
    setFeedbacks(feedbacks.data)
  }

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };

  // Set item to be updated
  const editFeedback = (item)=>{
    setFeedbackEditState({
      item,
      edit: true
    })
  }

  // Add a feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = parseInt(uuidv4());
    
    setFeedbacks([newFeedback, ...feedbacks]);
    console.log(feedbacks);
  };

  // Update feedback item
  const updateFeedback = (id, feedbackItem)=>{
    setFeedbacks(feedbacks.map((item)=> item.id === id ? {...item, ...feedbackItem}: item))
  }
 
  return <FeedbackContext.Provider value={{
    feedbacks,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEditState,
    updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext