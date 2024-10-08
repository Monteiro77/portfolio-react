import { useState, useEffect } from 'react';
import projeto1 from '../../assets/amongjump.JPG';
import projeto2 from '../../assets/arcticmokeys.JPG';
import projeto3 from '../../assets/pikachu.JPG';
import projeto4 from '../../assets/lionschooldesktop.JPG';
import projeto5 from '../../assets/saveats.jpeg';
import projeto6 from '../../assets/softsy.JPG';
import projeto7 from '../../assets/eco-trend-nine.vercel.app_.png';
import projeto8 from '../../assets/melodia-gamma.vercel.app_.png';
import projeto9 from '../../assets/monteiro77.github.io_Projeto-AirMax-Lima_.png';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './Slider.css'
import { Link } from 'react-router-dom';

const images = [
    { id: 1, src: projeto1, alt: 'Among Jump', sobre: 'Este jogo foi feito para a aprender mais sobre o JS' },
    { id: 2, src: projeto2, alt: 'Arctic Monkeys', sobre: 'Este site foi feito para aprender mais sobre HTML5 e CSS3' },
    { id: 3, src: projeto3, alt: 'Pikachu', sobre: 'Este site foi feito para aprender mais sobre HTML5 e CSS3' },
    { id: 4, src: projeto4, alt: 'Lion School', sobre: 'Este site foi feito para aprender mais sobre HTML5, CSS3 e JS, minha primeira vez criando um Back-End em Node.JS, e tambem consumindo dados' },
    { id: 5, src: projeto5, alt: 'Save Eats', sobre: 'Este foi o meu projeto para o TCC do SENAI Jandira, onde apresentamos uma solução inovadora para combater o despedício de alimento. O Projeto possui um App Mobile e um Site, ambos consumindo dados do Back' },
    { id: 6, src: projeto6, alt: 'Softsy Teste', sobre: 'Este foi o meu teste para iniciar na carreira de Dev' },
    { id: 7, src: projeto7, alt: 'Eco Trend', sobre: 'O Eco Society foi criado com a missão de unir tecnologia, moda e sustentabilidade em um só lugar. Cada produto oferecido em nossa loja é selecionado com base em critérios que priorizam o impacto ambiental positivo, como materiais reciclados, processos de fabricação eco-friendly e empresas comprometidas com práticas sustentáveis. Além de vender produtos de qualidade, nossa plataforma busca conscientizar os consumidores sobre a importância do consumo responsável.' },
    { id: 8, src: projeto8, alt: 'Melodia', sobre: 'O Melodia é uma plataforma gratuita que oferece uma experiência única de streaming de música, permitindo que os usuários criem playlists personalizadas e descubram novas músicas e artistas. O site foi desenvolvido utilizando HTML, SASS e Bootstrap para garantir uma interface responsiva e atraente.'},
    { id: 9, src: projeto9, alt: 'Nike Air Max', sobre: 'Site do tipo landing page para divulgar o Tenis Air Max. O objetivo desse projeto é colocar em prática os conhecimentos, sobre o desenvolvimentos de sites adquiridos no curso de Desenvolvimento de Sistemas no SENAI Jandira.'}
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
                            <Link to={`/projetos/${image.id}`}><img src={image.src} alt={image.alt} className="object-contain h-full" /></Link>
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
