import React from 'react';
import { useParams } from 'react-router-dom';

import { products, modelImages } from '../constants';

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === parseInt(productId || '', 10));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className=" h-64 object-cover]]" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-xl font-semibold">${product.price}</p>
    </div>
  );
};

export default Product;
