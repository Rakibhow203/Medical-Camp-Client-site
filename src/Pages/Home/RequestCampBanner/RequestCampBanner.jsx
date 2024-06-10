
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"




const animation = { duration: 5000, easing: (t) => t };

const RequestCampBanner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",
      drag: false,
      created(slider) {
        slider.moveToIdx(1, true, animation); // Start at index 1 with animation
      },
      updated(slider) {
        slider.moveToIdx(slider.track.details.abs + 1, true, animation); // Move to the next slide with animation
      },
      animationEnded(slider) {
        slider.moveToIdx(slider.track.details.abs + 1, true, animation); // Continue to the next slide
      },
    }
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img src='https://i.ibb.co/PMv6GpF/Banner1.jpg' alt="Banner 1" className="w-full h-auto" />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img src="https://i.ibb.co/wBpSL9D/banner2.jpg" alt="Banner 2" className="w-full h-auto" />
      </div>
      <div className="keen-slider__slide number-slide3">
        <img src="https://i.ibb.co/82dxPyz/banner3.jpg" alt="Banner 3" className="w-full h-auto" />
      </div>
      <div className="keen-slider__slide number-slide4">
        <img src="https://i.ibb.co/WzJNFm0/banner4.jpg" alt="Banner 4" className="w-full h-auto" />
      </div>
      <div className="keen-slider__slide number-slide5">
        <img src="https://i.ibb.co/KmVqj9q/banner5.jpg" alt="Banner 5" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default RequestCampBanner;
