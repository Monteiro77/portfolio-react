import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <header className="flex flex-row justify-between items-center text-white h-28 px-24 bg-backgroundcolor">
            <nav>
                <ul className="flex flex-row gap-20 text-xl">
                    <li>
                        <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to='/sobre' className="nav-link">Sobre Mim</Link>
                    </li>
                    <li>
                        <Link to='/projetos' className="nav-link">Projetos</Link>
                    </li>
                    <li>
                        <Link to='/contato' className="nav-link">Contato</Link>
                    </li>
                </ul>
            </nav>

            <h1 className="text-lg">
                <code>
                    <span className="text-customBlue">&lt;</span>
                    viniciusmonteiro
                    <span className="text-customBlue">/&gt;</span>
                </code>
            </h1>
        </header>
    );
}

export default Header;
