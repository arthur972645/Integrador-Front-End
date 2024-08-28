import { FaLocationDot } from "react-icons/fa6";
import './Main.css'

const Main = () => {
    return (
        <section className='Main'>

            <section className='Sessao-Imagem'>
                <div className="Imagem">
                    <div className="Info-imagem">
                        <div className='Textos-Imagem'>
                            <div className='texto1'>Descanse com Estilo</div>
                            <div className='texto2'>Sua Melhor Experiência de Hotel Começa Aqui!</div>
                            <div className='Btns-Imagem'>
                            <div className='Btn-imagem-reservar'>
                                <button>Reserve sua Estadia</button>
                            </div>
                            <div className='Btn-imagem-localização'>
                                <button onClick={() => window.open('https://www.google.com/maps?q=-28.5399126,-48.7780686', '_blank')}>
                                    {/* Não conseguir colocar no centro da caixa circular como esta no figma
                                    RESOLVER DEPOIS */}
                                    <FaLocationDot className="Icon-localizacao" />
                                </button>
                            </div>
                        </div>
                        </div>
                        <div className="Sessao-mensagem-fedeabck">
                            <div className="teste">
                                <div className="box-mensagem-fedeabck1">
                                
                                </div>
                            </div>
                            
                            <div className="box-mensagem-fedeabck2">

                            </div>
                        </div>

                    </div>

                </div>

            </section>
            <section className='Redes-Sociais'>

            </section>
            <section className='Hospoedagens-populares'>

            </section>
        </section>
    )
}

export default Main 