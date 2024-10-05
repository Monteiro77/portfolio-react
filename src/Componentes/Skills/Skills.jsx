import React, { useEffect, useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaJava, FaNode, FaFigma, FaPython} from 'react-icons/fa'; // Importe os ícones disponíveis

const icons = [
    { id: 1, component: <FaHtml5 size={50} /> },
    { id: 2, component: <FaCss3Alt size={50} /> },
    { id: 3, component: <FaJsSquare size={50} /> },
    { id: 4, component: <FaReact size={50} /> },
    { id: 5, component: <FaDatabase size={50} /> },
    { id: 6, component: <FaJava size={50} /> },
    { id: 7, component: <FaNode size={50} /> }, 
    { id: 8, component: <FaFigma size={50} /> }, 
    { id: 9, component:  <FaPython size={50} />}, 
];

const Skills = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesPerView = 4; // Número de ícones visíveis

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % icons.length);
        }, 3000); // Mude o valor para ajustar a velocidade de rotação

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (

        <div className="flex mb-4 w-3/4 h-40 relative">
            <div className="overflow-hidden w-full h-full">
                <div
                    className="flex transition-transform duration-300 h-full"
                    style={{
                        transform: `translateX(-${currentSlide * (100 / icons.length)}%)`,
                        width: `${icons.length * (100 / slidesPerView)}%`,
                    }}
                >
                    {icons.map((icon) => (
                        <div
                            key={icon.id}
                            className=" w-1/4 flex items-center justify-center mx-2" // Cada ícone ocupa 25% do espaço
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
