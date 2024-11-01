import React, { useState } from "react";
import { products, modelImages } from "../constants";
import Navbar2 from "../components/Navbar2";

type PlaceholderName = "Model" | "Product" | "Try-On Image";

interface ImagePlaceholderProps {
  name: PlaceholderName;
  selectedImage: string | null;
  onSelect: (image: string) => void;
}

interface GenImagePlaceholderProps {
  name: PlaceholderName;
  selectedImage: string | null;
  isLoading: boolean | null;
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
        className="object-contain border-2 border-gray-200 rounded"
        style={{ height: "20rem", width: "20rem" }}
      />
    ) : (
      <div
        className="w-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded"
        style={{ height: "20rem", width: "20rem" }}
      >
        <span className="text-gray-400">Select an image below</span>
      </div>
    )}
  </div>
);

const GenImagePlaceholder: React.FC<GenImagePlaceholderProps> = ({
  name,
  selectedImage,
  isLoading,
}) => (
  <div className="w-full h-70 text-center">
    <h2 className="text-lg font-semibold mb-2">{name}</h2>
    
    {selectedImage ? (
      <>
      {isLoading ? (
      <div className="object-contain border-2 border-gray-200 rounded flexCenter" style={{ height: "20rem", width: "20rem" }}>
        <span className="loading loading-ring loading-lg z-10 "></span>
      </div>
    ) : (
        <img
        src={selectedImage}
        alt={`${name} selected`}
        className="object-contain border-2 border-gray-200 rounded"
        style={{ height: "20rem", width: "20rem" }}
      />
    )}
       
      </>
    ) : (
      <div
        className="w-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded"
        style={{ height: "20rem", width: "20rem" }}
      >
        <span className="text-gray-400">See Generated Image Here</span>
      </div>
    )}
  </div>
);

const Demo = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedModelName, setSelectedModelName] = useState<string | null>(
    null
  );
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedProductName, setSelectedProductName] = useState<string | null>(
    null
  );

  const [selectedGen, setSelectedGen] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(false);

  //const placeholders: PlaceholderName[] = ["Model", "Product", "Try-On Image"];

  function delay(seconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }
  

  const handleOnClick = () => {
    const genPath =
      "/genImg/" + selectedModelName + "_" + selectedProductName + ".png";
    setSelectedGen(genPath);

    
    setIsLoading(true);
    delay(10).then(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
         <Navbar2></Navbar2>
        <div className="max-container padding-container pt-2 bg-gray-50 min-h-screen mt-4">
       
      <h1 className="text-2xl font-bold text-center mb-6">
        Lumu Virtual Try-On Demo
      </h1>
      <div className="flex flex-col lg:flex-row mb-8 gap-10 justify-self-center">
        <div className="w-1/1 lg:w-1/3 ">
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
                className="w-24 h-24 object-cover rounded cursor-pointer hover:scale-105 transition-transform active:active-img"
                onClick={() => {
                  setSelectedModelName(model.name);
                  setSelectedModel(model.image);
                }}
              />
            ))}
          </div>
        </div>

        <div className="w-1/1 lg:w-1/3">
          <div className="flex justify-center">
            <ImagePlaceholder
              name="Product"
              selectedImage={selectedProduct}
              onSelect={setSelectedProduct}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-5">
            {products.map((product) => (
              <img
                key={product.id}
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded cursor-pointer hover:scale-105 transition-transform"
                onClick={() => {
                  setSelectedProduct(product.image);
                  setSelectedProductName(product.name);
                }}
              />
            ))}
          </div>
        </div>

        <div className="w-1/1 lg:w-1/3">
          <GenImagePlaceholder
            name="Try-On Image"
            selectedImage={selectedGen}
            onSelect={() => {}}
            isLoading={isLoading}
          />

          <div className="flexCenter mt-2" style={{padding:"6rem"}}>

          <div className="btn" onClick={handleOnClick}>
            Generate
          </div>
          </div>

          
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default Demo;
