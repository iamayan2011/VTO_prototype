import React from 'react';

import './App.css';
import Home from './screens/Home';
import Product from './screens/Product';
import Demo from './screens/Demo';
import Demo2 from './screens/Demo2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/demo2" element={<Demo2 />} />
      </Routes>
    </Router>
  );
}

export default App;
