import { useState } from 'react';

import FeedbackData from '../data/FeedbackData';
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';

function Home() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);


  return (
    <>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </>
  )
}

export default Home