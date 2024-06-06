import BannerSlider from "./BannerSlider";



import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Banner = () => {



  const successStories = [
    { id: 1, content: 'Success Story 1' },
    { id: 2, content: 'Success Story 2' },
    // Add more success stories here
  ];



  return (
    <div>
      <div className="mt-8 text-center">

        <h1 className="text-2xl mb-4">Welcome to the  CampAid</h1>
        <p> "Your safety is our priority at <span>'CampAid'</span>. Trust us for expert care and personalized services that prioritize your well-being. <br /> expreience compassionate care with integrity.</p>
      </div>

      <div className="container mx-auto p-4">
        <BannerSlider></BannerSlider>
      </div>





    </div>
  );
};

export default Banner;