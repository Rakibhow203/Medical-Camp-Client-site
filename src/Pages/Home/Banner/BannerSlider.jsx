
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };

  const slidesData = [
    {
      id: 1,
      image: 'https://i.ibb.co/Tkj17bM/Blue-and-White-Medical-and-Health-Care-Banner.jpg',

    },
    {
      id: 2,
      image: 'https://i.ibb.co/T2XvmSK/banner22.jpg',

    },
    {
      id: 3,
      image: 'https://i.ibb.co/bB91ghN/labor-union-members-working-together-23-2150995018.jpg',
      title: 'Successful Surgery Camp',
      description: 'We performed over 100 successful surgeries in our last camp.'
    },
    {
      id: 4,
      image: 'https://i.ibb.co/bB91ghN/labor-union-members-working-together-23-2150995018.jpg',
      title: 'Dental Check-Up Camp',
      description: 'Hundreds of patients received free dental check-ups and treatments.'
    },
    {
      id: 5,
      image: 'https://i.ibb.co/bB91ghN/labor-union-members-working-together-23-2150995018.jpg',
      title: 'Health Awareness Camp',
      description: 'Our health awareness camp educated communities on the importance of regular check-ups.'
    }
  ];

  return (

    <div className="container mx-auto p-4">
      <Slider {...settings}>
        {slidesData.map(slide => (
          <div key={slide.id} className="relative">
            <img src={slide.image} alt={slide.title} className="w-full h-96 object-cover rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 rounded-lg">
              <h2 className="text-2xl md:text-4xl font-bold mb-2 drop-shadow-lg">{slide.title}</h2>
              <p className="text-lg md:text-2xl drop-shadow-md">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>

  );
};

export default BannerSlider;