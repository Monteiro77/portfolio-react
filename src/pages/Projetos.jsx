import Skills from '../Componentes/Skills/Skills';
import Slider from '../Componentes/Slider/Slider';

const Projetos = () => {

    return (
        <section className="flex flex-col justify-center items-center bg-gradient-to-b from-backgroundcolor to-gray-800 text-white h-full gap-5">
            <h1 className="text-8xl font-bold mb-8">Projetos</h1>
            <Slider></Slider>
            <h2 className="text-7xl font-bold mb-8">Skills</h2>
            <Skills></Skills>
        </section>
    );
};

export default Projetos;
