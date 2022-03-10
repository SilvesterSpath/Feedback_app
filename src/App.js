import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';

function App() {
  /*   const [feedbacks, setFeedbacks] = useState(FeedbackData);

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
  }; */

  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        {/*         <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDel={deleteFeedack} /> */}
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>

        <Routes>
          <Route path='/about' exact element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
