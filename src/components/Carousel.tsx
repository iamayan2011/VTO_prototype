import React from 'react';

const Carousel: React.FC = () => {
  return (
    <div className="carousel carousel-center ">
      <div className="carousel-item">
        <img
          src="https://img.freepik.com/free-photo/model-wearing-beautiful-shade-clothing_23-2151428029.jpg"
          alt="Model1"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://media.istockphoto.com/id/1733124463/photo/stylish-dark-skinned-man-wearing-a-yellow-blazer.jpg?s=612x612&w=0&k=20&c=Cym3apJurmcvuBIE-Hrwg0J_7p32V3I2XncZcYuw7i4="
          alt="Model2"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/genImg/Woman1_WCloth1.png"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.freepik.com/free-photo/fashionable-cool-lady-with-brunette-wavy-hairstyle-midi-stylish-plaid-outfit-black-heels-smiling-looking-into-camera_197531-28730.jpg?semt=ais_hybrid"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/genImg/Woman2_WCloth2.png"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.freepik.com/premium-photo/most-beautiful-modern-fashion-model-front-solid-background_943617-951.jpg"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.freepik.com/premium-photo/model-wears-white-top-blue-pants-with-white-t-shirt_759095-10115.jpg"
          alt="Pizza"
        />
      </div>
    </div>
  );
};

export default Carousel;
