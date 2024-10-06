import React, { useEffect, useState } from 'react';
import profileImage from '../../assets/imagePerfil.jpeg';
import Typewriter from 'react-typewriter-effect';

function MainContent() {
  const [fade, setFade] = useState(false); // Estado para controle de opacidade

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true); // Ativar o efeito de esmaecimento após um pequeno atraso
    }, 200); // Altere o valor conforme necessário para o efeito desejado

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, []);

  return (
    <section className={`flex flex-col md:flex-row items-center justify-around h-full bg-backgroundcolor text-white px-4 md:px-20 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col justify-center text-center md:text-left mb-8">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Olá, meu nome é{' '}
          <span className="text-blue-500">
            <Typewriter
              text="Vinícius Monteiro Araújo"
              speed={100}
              cursorColor="white"
              startDelay={100}
            />
          </span>
          {' '}e sou desenvolvedor Full-Stack
        </h1>
      </div>
      <div className='rounded-full bg-blue-500 p-1'>
        <img
          src={profileImage}
          alt="Vinícius Monteiro"
          className="rounded-full w-40 h-40 md:w-96 md:h-96 border-4 border-white object-cover"
        />
      </div>
    </section>
  );
}

export default MainContent;

