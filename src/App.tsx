import React from 'react';

import './App.css';
import Home from './screens/Home';
import Product from './screens/Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
