import BannerSlider from "./BannerSlider";
const Banner = () => {






  return (
    <div className="bg-gray-100 py-10"> {/* Add background and padding */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4"> {/* Larger text with blue color */}
          Welcome to CampAid
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed"> {/* Medium to large text with gray color */}
          "Your safety is our priority at <span className="text-green-500 font-semibold">'CampAid'</span>. <br /> {/* Green color for 'CampAid' */}
          Trust us for expert care and personalized services that prioritize your well-being. <br />
          Experience compassionate care with integrity."
        </p>
      </div>

      <div className="container mx-auto p-4">
        <BannerSlider />
      </div>
    </div>
  );
};

export default Banner;