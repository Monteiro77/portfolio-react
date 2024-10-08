import { FaGraduationCap, FaBullseye } from "react-icons/fa"; // Ícones para Formação e Objetivo

function SobreMim() {
  return (
    <section className="flex flex-col justify-center items-center bg-gradient-to-b from-backgroundcolor to-gray-800 text-white h-full px-4 pb-6 md:px-10 gap-16 ">
      <h1 className="text-5xl md:text-8xl font-bold mb-8 text-center">
        Sobre mim
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 w-full">
        <p className="text-lg md:text-xl text-center mb-10 w-full md:w-3/4">
          Vinícius Monteiro Araújo, aos 19 anos, está iniciando sua carreira
          como desenvolvedor full stack. Formado em Desenvolvimento de Sistemas
          pelo SENAI, ele está começando um curso em Engenharia de Software na
          FIAP para aprimorar seus conhecimentos. Possui experiência em
          front-end com HTML, CSS e JavaScript, além de frameworks como React, e
          também trabalha com desenvolvimento mobile nativo em Kotlin. No
          back-end, é proficiente em Node.js e Java, e tem conhecimento em
          bancos de dados como MySQL e SQLite, focando na criação de servidores
          robustos e na manipulação eficiente de dados.
        </p>

        <div className="flex flex-col w-full md:max-w-4xl gap-5 ">
          <div className="flex flex-col items-center">
            <FaGraduationCap className="text-6xl md:text-8xl mb-2" />
            <h2 className="text-xl md:text-2xl font-semibold">
              Formação Acadêmica
            </h2>
            <p className="text-center">
              SENAI - Desenvolvimento de Sistemas 2022 - 2023
            </p>
            <p className="text-center">
              FIAP - Engenharia de Software 2024 - 2027
            </p>
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
