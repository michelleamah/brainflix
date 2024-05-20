import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainVideo from './components/Component/MainVideo.jsx';
import VideoUpload from './pages/upload.jsx';
import Header from './components/Component/Header.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainVideo />} /> 
        <Route path="/videos/:id" element={<MainVideo />} />
        <Route path="/upload" element={<VideoUpload />} />
      </Routes>
    </Router>
  );
}

export default App;