import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  const deleteFeedack = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDel={deleteFeedack} />
      </div>
    </>
  );
}

export default App;
