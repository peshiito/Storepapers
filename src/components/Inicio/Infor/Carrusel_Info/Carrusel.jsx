import { useState, useEffect, useCallback } from "react";
import "./Carrusel.css";

const Carrusel = ({ images, autoPlayInterval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto play
  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval, nextSlide]);

  return (
    <div className="carousel">
      <div className="carousel-container">
        {/* Botones de navegación */}
        <button
          className="carousel-btn carousel-btn-prev"
          onClick={prevSlide}
          aria-label="Imagen anterior"
        >
          ‹
        </button>

        <button
          className="carousel-btn carousel-btn-next"
          onClick={nextSlide}
          aria-label="Siguiente imagen"
        >
          ›
        </button>

        {/* Imágenes del carrusel */}
        <div className="carousel-track">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentIndex ? "active" : ""
              }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <img
                src={image}
                alt={`Imagen ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </div>

        {/* Indicadores */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
