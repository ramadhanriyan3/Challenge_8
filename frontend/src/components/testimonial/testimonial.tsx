"use client";

import { Image } from "react-bootstrap";
import TestiCard from "@/components/testimonial/testiCard";
import Glide from "@glidejs/glide";
import { useEffect } from "react";

const sliderConfiguration = {
  type: "carousel" as const, // atau "slider" jika Anda ingin menggunakan slider
  perView: 2.2597096900745393,
  focusAt: "center",
  gap: 32,
  breakpoints: {
    1200: {
      perView: 1.8,
    },
    768: {
      perView: 1.2,
    },
    576: {
      perView: 1,
    },
  },
};

function Testimonial() {
  useEffect(() => {
    const slider = new Glide(".glide", sliderConfiguration);
    slider.mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div
      data-testid="testimonial"
      className="container px-sm-0 px-3 mt-100 max-width"
      id="testimonial"
    >
      <h2 className="big-header text-center mb-3">Testimonial</h2>
      <p className="body-light text-center pb-4">
        Berbagai review positif dari para pelanggan kami
      </p>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <TestiCard imgSrc="/Pic-1.png" />
            </li>
            <li className="glide__slide">
              <TestiCard imgSrc="/Pic-1.png" />
            </li>
            <li className="glide__slide">
              <TestiCard imgSrc="/Pic-2.png" />
            </li>
          </ul>
          <div className="button-wrap pt-3 pt-md-4 text-center">
            <div data-glide-el="controls" id="testi-button">
              <button data-glide-dir="<" className="p-2">
                <Image src="/Left button.png" alt="" />
              </button>
              <button data-glide-dir=">" className="p-2">
                <Image src="/Right button.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
