import { useParams } from "react-router-dom";
import projeto1 from "../assets/amongjump.JPG";
import projeto2 from "../assets/arcticmokeys.JPG";
import projeto3 from "../assets/pikachu.JPG";
import projeto4 from "../assets/lionschooldesktop.JPG";
import projeto5 from "../assets/saveats.jpeg";
import projeto6 from "../assets/softsy.JPG";
import projeto7 from "../assets/eco-trend-nine.vercel.app_.png";
import projeto8 from "../assets/melodia-gamma.vercel.app_.png";
import projeto9 from "../assets/monteiro77.github.io_Projeto-AirMax-Lima_.png";
import { FaGithub } from "react-icons/fa";
import { Button } from "@material-tailwind/react";

const projetos = [
  {
    id: 1,
    src: projeto1,
    alt: "Among Jump",
    sobre: "Este jogo foi feito para a aprender mais sobre o JS",
    linkGit: "https://github.com/Monteiro77/Among-Jump",
    linkSite: "https://monteiro77.github.io/Among-Jump/",
  },
  {
    id: 2,
    src: projeto2,
    alt: "Arctic Monkeys",
    sobre: "Este site foi feito para aprender mais sobre HTML5 e CSS3",
    linkGit: "https://github.com/Monteiro77/Arctic-Monkeys",
    linkSite: "https://monteiro77.github.io/Arctic-Monkeys/",
  },
  {
    id: 3,
    src: projeto3,
    alt: "Pikachu",
    sobre: "O site do nosso querido Pikachu, foi feito no Senai Jandira, nesse site foi meus primeiros passos com a responsividade, utilizando a tecnologia de media queries!",
    linkGit: "https://github.com/Monteiro77/Atividade-pikachu",
    linkSite: "https://monteiro77.github.io/Atividade-pikachu/",
  },
  {
    id: 4,
    src: projeto4,
    alt: "Lion School",
    sobre:
      "Este site foi feito para aprender mais sobre HTML5, CSS3 e JS, minha primeira vez criando um Back-End em Node.JS, e tambem consumindo dados",
    linkGit: "https://github.com/luyz-gusta/Projeto-Lion-School-2023-Front",
    linkSite: "https://projeto-lion-school-2023-front.vercel.app/",
  },
  {
    id: 5,
    src: projeto5,
    alt: "Save Eats",
    sobre:
      "Este foi o meu projeto para o TCC do SENAI Jandira, onde apresentamos uma solução inovadora para combater o despedício de alimento. O Projeto possui um App Mobile e um Site, ambos consumindo dados do Back",
  },
  {
    id: 6,
    src: projeto6,
    alt: "Softsy Teste",
    sobre: "Este foi o meu teste para iniciar na carreira de Dev",
  },
  {
    id: 7,
    src: projeto7,
    alt: "Eco Trend",
    sobre:
      "O Eco Society foi criado com a missão de unir tecnologia, moda e sustentabilidade em um só lugar. Cada produto oferecido em nossa loja é selecionado com base em critérios que priorizam o impacto ambiental positivo, como materiais reciclados, processos de fabricação eco-friendly e empresas comprometidas com práticas sustentáveis. Além de vender produtos de qualidade, nossa plataforma busca conscientizar os consumidores sobre a importância do consumo responsável.",
    linkGit: "https://github.com/Monteiro77/EcoTrend",
    linkSite: "https://eco-trend-nine.vercel.app/",
  },
  {
    id: 8,
    src: projeto8,
    alt: "Melodia",
    sobre:
      "O Melodia é uma plataforma gratuita que oferece uma experiência única de streaming de música, permitindo que os usuários criem playlists personalizadas e descubram novas músicas e artistas. O site foi desenvolvido utilizando HTML, SASS e Bootstrap para garantir uma interface responsiva e atraente.",
    linkGit: "https://github.com/RafaelDuarteF/melodia",
    linkSite: "https://melodia-gamma.vercel.app/",
  },
  {
    id: 9,
    src: projeto9,
    alt: "Nike Air Max",
    sobre:
      "Site do tipo landing page para divulgar o Tenis Air Max. O objetivo desse projeto é colocar em prática os conhecimentos, sobre o desenvolvimentos de sites adquiridos no curso de Desenvolvimento de Sistemas no SENAI Jandira.",
  },
];

const SobreProjeto = () => {
  const { id } = useParams();

  const projeto = projetos.find((projeto) => projeto.id == id);

  return (
    <section className="h-full bg-gradient-to-b from-backgroundcolor to-gray-800 flex  text-white py-12 flex-col justify-center  items-start gap-12 px-12">
      <h1 className="text-5xl font-semibold">{projeto.alt}</h1>
      <div className="w-full flex flex-row">
        <div className="w-3/5">
          <img src={projeto.src} alt="" />
        </div>
        <div className="flex flex-col h-full  justify-around gap-5 items-start px-5">
            <h2 className="text-5xl">
                Sobre
            </h2>
          <p className="text-sm">{`Projeto ${projeto.sobre}`}</p>
          <div className="flex flex-row gap-5">
          <a href={projeto.linkGit}>
            <FaGithub size={40}></FaGithub>
          </a>
          <Button color="blue"><a href={projeto.linkSite}>Acessar Site</a></Button>
        </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-16">
       
      </div>
    </section>
  );
};

export default SobreProjeto;
