import ImagemLogo from '../../Image/Imagem_Logo.png'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LuUser } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    
    return (
        <section className="Sessao-navbar">
            <div className="Sessao-logo">
                <img src={ImagemLogo} alt="Logo" />
            </div>
            <div className="Sessao-caminhos">
                <NavItem path='/' currentPath={location.pathname}>Home</NavItem>
                <NavItem path='/Contato' currentPath={location.pathname}>Contato</NavItem>
                <NavItem path='/Acomodacoes' currentPath={location.pathname}>Acomodação</NavItem>
                <NavItem path='/Sobre' currentPath={location.pathname}>Sobre</NavItem>
            </div>
            <div className="Sessao-reservas">
                <div className='Box-reservas'>
                    <Link className='Link-reserva' to="/Reservas">RESERVE JÁ</Link>
                </div>
                <div className='Box-perfil'>
                    <button className='btn-user'>
                        <LuUser className='icon' />
                    </button>
                </div>
                <div className='Box-pesquisar'>
                    <button>
                        <HiMagnifyingGlass className='Icon-lupa'/>
                    </button>
                </div>
            </div>
        </section>
    )
}

const NavItem = ({ path, currentPath, children }) => {
    const isActive = currentPath === path;
    return (
        <div className="nav-item">
            <Link className='Link' to={path}>
                {children}
            </Link>
            <div className={`underline ${isActive ? 'active' : ''}`} />
        </div>
    );
}

export default Navbar;
