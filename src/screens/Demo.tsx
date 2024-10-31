import React, { useState } from "react";
import { products, modelImages } from "../constants";

type PlaceholderName = "Model" | "Product" | "Try-On Image";

interface ImagePlaceholderProps {
  name: PlaceholderName;
  selectedImage: string | null;
  onSelect: (image: string) => void;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  name,
  selectedImage,
}) => (
  <div className="w-full h-70 text-center">
    <h2 className="text-lg font-semibold mb-2">{name}</h2>
    {selectedImage ? (
      <img
        src={selectedImage}
        alt={`${name} selected`}
        className="object-cover border-2 border-gray-200 rounded"
        style={{ height: "20rem",width:"20rem" }}
      />
    ) : (
      <div
        className="w-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded"
        style={{ height: "20rem", width:"20rem" }}
      >
        <span className="text-gray-400">Select an image below</span>
      </div>
    )}
  </div>
);

const Demo = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  //const placeholders: PlaceholderName[] = ["Model", "Product", "Try-On Image"];
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        Lumu Virtual Try-On
      </h1>
      <div className="flex justify-between mb-8 gap-5">
        <div className="w-1/3">
          <ImagePlaceholder
            name="Model"
            selectedImage={selectedModel}
            onSelect={setSelectedModel}
          />
          <div className="grid grid-cols-3 gap-4 mt-5">
            {modelImages.map((model) => (
              <img
                key={model.id}
                src={model.image}
                alt={model.name}
                className="w-24 h-24 object-cover rounded cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedModel(model.image)}
              />
            ))}
          </div>
        </div>

        <div className="w-1/3">
        <div className="flex justify-center">
        <ImagePlaceholder
            name="Product"
            selectedImage={selectedProduct}
            onSelect={setSelectedProduct}
          />
        </div>
          
          <div className="grid grid-cols-3 gap-2 mt-5 p-3">
            {products.map((product) => (
              <img
                key={product.id}
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedProduct(product.image)}
              />
            ))}
          </div>
        </div>

        <div className="w-1/3">
        <ImagePlaceholder
          name="Try-On Image"
          selectedImage={null}
          onSelect={() => {}}
        />

        </div>

        
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-center">Model Images</h2>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 text-center">
          Product Images
        </h2>
      </div>
    </div>
  );
};

export default Demo;
