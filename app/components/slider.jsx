"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const largeImages = ["/slider01.jpg", "/slider02.jpg"];
const smallImages = ["/slider01sm.jpg", "/slider02sm.jpg"];

export default function AutoSlider() {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateImages = () => {
      const isMobile = window.innerWidth < 768;
      setImages(isMobile ? smallImages : largeImages);
    };

    updateImages();
    window.addEventListener("resize", updateImages);
    return () => window.removeEventListener("resize", updateImages);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [images, isPaused]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return null;

  return (
    <div
      className="relative w-full h-[500px] overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover h-[500px]"
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100"
        aria-label="Slide anterior"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100"
        aria-label="Próximo slide"
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
      </button>
    </div>
  );
}
