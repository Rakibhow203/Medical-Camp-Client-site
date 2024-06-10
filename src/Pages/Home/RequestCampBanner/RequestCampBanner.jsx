import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"
const animation = { duration: 5000, easing: (t) => t };

const RequestCampBanner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance", // Efficient rendering for animations
      drag: false, // Disable dragging for automatic transitions
      created(slider) {
        slider.moveToIdx(5, true, animation); // Start at index 5 with animation
      },
      updated(slider) {
        slider.moveToIdx(slider.track.details.abs + 5, true, animation); // Move to the next slide with animation
      },
      animationEnded(slider) {
        slider.moveToIdx(slider.track.details.abs + 5, true, animation); // Continue to the next slide
      },
    }
  );
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">1</div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
  );
};

export default RequestCampBanner;
