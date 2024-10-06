import React, { useState, useEffect } from 'react';
import projeto1 from '../../assets/amongjump.JPG';
import projeto2 from '../../assets/arcticmokeys.JPG';
import projeto3 from '../../assets/pikachu.JPG';
import projeto4 from '../../assets/lionschooldesktop.JPG';
import projeto5 from '../../assets/saveats.jpeg';
import projeto6 from '../../assets/softsy.JPG';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './Slider.css'

const images = [
    { id: 1, src: projeto1, alt: 'Imagem 1' },
    { id: 2, src: projeto2, alt: 'Imagem 2' },
    { id: 3, src: projeto3, alt: 'Imagem 3' },
    { id: 4, src: projeto4, alt: 'Imagem 4' },
    { id: 5, src: projeto5, alt: 'Imagem 5' },
    { id: 6, src: projeto6, alt: 'Imagem 6' }
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(2);

    // Função para ajustar o número de slides por visualização de acordo com o tamanho da tela
    const handleResize = () => {
        if (window.innerWidth < 640) {
            setSlidesPerView(1); // 1 slide por vez em dispositivos menores
        } else if (window.innerWidth < 1024) {
            setSlidesPerView(2); // 2 slides por vez em tablets
        } else {
            setSlidesPerView(3); // 3 slides por vez em telas maiores
        }
    };

    useEffect(() => {
        handleResize(); // Verifica o tamanho da tela ao carregar
        window.addEventListener('resize', handleResize); // Atualiza o número de slides ao redimensionar a tela
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const totalSlides = Math.ceil(images.length / slidesPerView);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="flex mb-4 w-full md:w-3/5 relative items-center">
            <button onClick={prevSlide} className="bg-gray-700 text-white rounded px-2 py-1">
                <FaChevronLeft />
            </button>
            <div className="overflow-hidden w-full h-full">
                <div
                    className="flex transition-transform duration-300 h-full"
                    style={{
                        transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
                        width: `${images.length * (100 / slidesPerView)}%`,
                    }}
                >
                    {images.map((image) => (
                        <div
                            key={image.id}
                            className="h-full w-full flex items-center bg-black justify-center mx-2"
                        >
                            <img src={image.src} alt={image.alt} className="object-contain h-full" />
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={nextSlide} className="bg-gray-700 text-white rounded px-2 py-1">
                <FaChevronRight />
            </button>
        </div>
    );
};

export default Slider;
