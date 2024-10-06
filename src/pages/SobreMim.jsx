import React from 'react';
import { FaGraduationCap, FaBullseye } from 'react-icons/fa'; // Ícones para Formação e Objetivo

function SobreMim() {
    return (
        <section className="flex flex-col justify-center items-center bg-gradient-to-b from-backgroundcolor to-gray-800 text-white h-full px-4 md:px-10 gap-16">

            <h1 className="text-5xl md:text-8xl font-bold mb-8 text-center">Sobre mim</h1>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 w-full'>

                <p className="text-lg md:text-xl text-center mb-10 w-full md:w-3/4">
                    Meu nome Vinícius Monteiro Araújo, e aos 19 anos, estou animado para embarcar em uma jornada profissional como desenvolvedor full stack. Sou apaixonado por tecnologia desde cedo, me formei em Desenvolvimento de Sistemas no SENAI, onde mergulhei de cabeça no vasto mundo do desenvolvimento de software.
                    Estou começando meu curso em Engenharia de Software na FIAP, onde procuro aprimorar meus conhecimentos.
                    Como desenvolvedor full stack, domino diversas linguagens e tecnologias. No front-end, tenho experiência sólida em HTML, CSS e JavaScript, garantindo interfaces web atraentes e responsivas. Minha familiaridade com frameworks como React me permite criar experiências do usuário modernas e intuitivas. Também tenho conhecimento com o desenvolvimento Mobile Nativo, usando a linguagem Kotlin com a biblioteca Jetpack Compose.
                    No lado do back-end, sou proficiente em linguagens como Node.js e Java, além de ter conhecimento em bancos de dados como MySQL e SQLite. A criação de servidores robustos e a manipulação eficiente de dados são aspectos que levo a sério em meu trabalho.
                </p>

                <div className="flex flex-col w-full md:max-w-4xl gap-5 ">
                    <div className="flex flex-col items-center">
                        <FaGraduationCap className="text-6xl md:text-8xl mb-2" />
                        <h2 className="text-xl md:text-2xl font-semibold">Formação Acadêmica</h2>
                        <p className="text-center">SENAI - Desenvolvimento de Sistemas 2022 - 2023</p>
                        <p className="text-center">FIAP - Engenharia de Software 2024 - 2027</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaBullseye className="text-6xl md:text-8xl mb-2" />
                        <h2 className="text-xl md:text-2xl font-semibold">Objetivo</h2>
                        <p className="text-center">Aprimorar meus conhecimentos</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default SobreMim;
