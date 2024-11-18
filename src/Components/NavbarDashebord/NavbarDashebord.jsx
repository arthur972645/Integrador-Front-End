import React from "react";
import "./NavbarDashebord.css";
import { Link } from "react-router-dom";
import ImamgemLogo from "../../Image/Imgem-logo.png";

const NavbarDashebord = () => {
    return (
        <section className="NavbarDashebord">
            <div className="ImamgemLogoDashebord">
                <img src={ImamgemLogo} alt="Logo" />
            </div>
                
            <div className="SessaoCaminhos">
                <div className="RotaDashebord">
                    <Link to="/Dashebord">Dashebord</Link>
                </div>
                <div className="RotaReserva">
                    <Link to="/Reserva">Reserva</Link>
                </div>
                <div className="RotaFinanceiro">
                    <Link to="/Financeiro">Financeiro</Link>
                </div>
            </div>
        </section>
    );
};

export default NavbarDashebord;
