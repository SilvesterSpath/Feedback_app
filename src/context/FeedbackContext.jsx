import {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

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
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 3,
    rating: 5,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
])

  const [feedbackEditState, setFeedbackEditState] = useState({
    item: {},
    edit: false
  })

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

  // Delete feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = parseInt(uuidv4());
    feedbacks.push(newFeedback);
    setFeedbacks([newFeedback, ...feedbacks]);
    console.log(feedbacks);
  };
 
  return <FeedbackContext.Provider value={{
    feedbacks,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEditState
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext