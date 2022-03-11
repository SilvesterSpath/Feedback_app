import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';
import AboutIconLink from './components/AboutIconLink';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/about' exact element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </BrowserRouter>
  );
}

export default App;
