import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { products, modelImages } from "../constants";
import Navbar2 from "../components/Navbar2";

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === parseInt(productId || "", 10));

  const [displayedImage, setDisplayedImage] = useState(product?.image);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleModelClick = async (modelImage: string) => {
    setDisplayedImage(modelImage);
    try {
    } catch (error) {
      console.error("Error fetching superimposed image:", error);
    }
  };

  return (
    <div>
      <Navbar2></Navbar2>
      <div className="max-container padding-container p-2">
        {/* Main Product Image */}
        <img
          src={displayedImage}
          alt={product.name}
          className="h-64 object-cover"
        />
        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
        <p className="text-xl font-semibold">${product.price}</p>

        {/* Model Images */}
        <div className="flex space-x-2 mt-4">
          <img
            src={product?.image}
            alt={product.name}
            className="w-20 h-20 object-cover cursor-pointer"
            onClick={() => handleModelClick(product?.image)}
          />
          {modelImages.map((modelImage, index) => (
            <img
              key={index}
              src={modelImage.image}
              alt={`Model ${index + 1}`}
              className="w-20 h-20 object-cover cursor-pointer"
              onClick={() => handleModelClick(modelImage.image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
