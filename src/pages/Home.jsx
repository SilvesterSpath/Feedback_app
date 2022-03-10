import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../data/FeedbackData';
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';

function Home() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  const deleteFeedack = (id) => {
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
  return (
    <>
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedbacks={feedbacks} />
      <FeedbackList feedbacks={feedbacks} handleDel={deleteFeedack} />
    </>
  )
}

export default Home