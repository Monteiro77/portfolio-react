import React, { useEffect, useState, useRef } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaJava, FaNode, FaFigma, FaPython } from 'react-icons/fa';

const icons = [
    { id: 1, component: <FaHtml5 size={50} /> },
    { id: 2, component: <FaCss3Alt size={50} /> },
    { id: 3, component: <FaJsSquare size={50} /> },
    { id: 4, component: <FaReact size={50} /> },
    { id: 5, component: <FaDatabase size={50} /> },
    { id: 6, component: <FaJava size={50} /> },
    { id: 7, component: <FaNode size={50} /> },
    { id: 8, component: <FaFigma size={50} /> },
    { id: 9, component: <FaPython size={50} /> },
];

const Skills = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);
    const slidesPerView = 4; // Número de ícones visíveis

    // Duplicando os ícones para criar o efeito infinito
    const duplicatedIcons = [...icons, ...icons];

    useEffect(() => {
        const totalItems = duplicatedIcons.length;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                const nextSlide = prev + 1;
                if (nextSlide >= totalItems / 2) {
                    // Quando atinge a metade (ponto onde o carrossel precisa "resetar" visualmente)
                    setTimeout(() => {
                        // Remove a transição temporariamente e reposiciona no início visualmente
                        if (carouselRef.current) {
                            carouselRef.current.style.transition = 'none';
                            setCurrentSlide(0);
                        }
                    }, 300); // Atraso curto para garantir a transição antes de resetar
                    return nextSlide;
                }
                return nextSlide;
            });
        }, 1000); // Ajusta a velocidade de rotação

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, [duplicatedIcons.length]);

    useEffect(() => {
        if (carouselRef.current && currentSlide === 0) {
            // Restaura a transição após o "reset visual"
            setTimeout(() => {
                carouselRef.current.style.transition = 'transform 0.5s ease';
            }, 20); // Pequeno atraso para garantir que a transição seja aplicada corretamente
        }
    }, [currentSlide]);

    return (
        <div className="flex mb-4 w-3/4 h-40 relative">
            <div className="overflow-hidden w-full h-full">
                <div
                    ref={carouselRef}
                    className="flex transition-transform duration-300 h-full"
                    style={{
                        transform: `translateX(-${(currentSlide * 100) / duplicatedIcons.length}%)`,
                        width: `${duplicatedIcons.length * (100 / slidesPerView)}%`,
                    }}
                >
                    {duplicatedIcons.map((icon, index) => (
                        <div
                            key={index} // Use index já que os ícones são duplicados
                            className="w-1/4 flex items-center justify-center mx-2" // Cada ícone ocupa 25% do espaço
                        >
                            {icon.component}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
