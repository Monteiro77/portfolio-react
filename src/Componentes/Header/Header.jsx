import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones para hambúrguer e "fechar"
import './header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Controla o estado do menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna o estado do menu aberto ou fechado
  };

  return (
    <header className="flex flex-row justify-between items-center h-16 bg-backgroundcolor text-white px-6 md:px-24">
      <h1 className="text-lg">
        <code>
          <span className="text-customBlue">&lt;</span>
          viniciusmonteiro
          <span className="text-customBlue">/&gt;</span>
        </code>
      </h1>

      {/* Botão hambúrguer para telas menores */}
      <button className="md:hidden text-3xl" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Links de navegação */}
      <nav
        className={`md:block ${
          isOpen ? 'block' : 'hidden'
        } fixed md:static top-16 left-0 w-full bg-backgroundcolor md:w-auto md:flex md:gap-20 z-40 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row gap-10 md:gap-16 text-xl md:items-center px-8 md:px-0 py-4 md:py-0">
          <li>
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="nav-link" onClick={toggleMenu}>
              Sobre Mim
            </Link>
          </li>
          <li>
            <Link to="/projetos" className="nav-link" onClick={toggleMenu}>
              Projetos
            </Link>
          </li>
          <li>
            <Link to="/contato" className="nav-link" onClick={toggleMenu}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
