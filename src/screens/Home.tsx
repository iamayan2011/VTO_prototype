import React from 'react';
import { Link } from 'react-router-dom';

import { products } from '../constants';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';


const Home = () => {
  return (
    <div className=''>
    <Navbar></Navbar>
    <Carousel></Carousel>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="border rounded shadow p-4">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
          <p className="text-lg font-bold">${product.price}</p>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Home;
