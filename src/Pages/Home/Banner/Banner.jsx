import BannerSlider from "./BannerSlider";
const Banner = () => {






  return (
    <div>
      <div className=" text-center">

        <h1 className="text-2xl">Welcome to the  CampAid</h1>
        <p> "Your safety is our priority at <span>'CampAid'</span>. Trust us for expert care and personalized services that prioritize your well-being. <br /> expreience compassionate care with integrity.</p>
      </div>

      <div className="container mx-auto p-4">
        <BannerSlider></BannerSlider>
      </div>





    </div>
  );
};

export default Banner;