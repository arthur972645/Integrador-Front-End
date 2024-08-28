import ImagemLogo from '../../Image/Imagem_Logo.png'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { LuUser } from "react-icons/lu";
import './Navbar.css'

const Navbar = () => {
    return(
       
        <section className="Sessao-navbar">
            <div className="Sessao-logo">
                <img src={ImagemLogo} alt="" />
            </div>
            <div className="Sessao-caminhos">
                <Link className='Link' to='/'>Home</Link>
                <Link className='Link' to= "/Contato">Contato</Link>
                <Link className='Link' to="/Acomodações">Acomodação</Link>
                <Link className='Link' to="/Sobre">Sobre</Link>
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
                        <HiMagnifyingGlass  className='Icon-lupa'/>
                    </button>
                    
                </div>
            </div>
        </section>
    )
}
export default Navbar