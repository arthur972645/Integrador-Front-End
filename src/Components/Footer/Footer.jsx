import React from 'react'; // Assegura que o React seja importado
import './Footer.css'; // Importa o CSS para o componente

const Footer = () => {
  return (
    <section className="Footer">
  
        <div className="Informacoes-Pousada">
          <p>Estrada Ipua nº6</p>
          <p>Laguna-SC | 88790-000</p>
          <p>(48) 99940-9732 | pousadaquintadoypua@gmail.com</p>
        </div>
        <div className='Direitos'>
          <p>© Pousada Quinta do Ypuã Todos os direitos reservados</p>
        </div>
        <div className='Desenvolvedores'> 
          <p>- Arthur de amorinm lucena lima</p>
          <p>- Arthur de amorinm lucena lima</p>
          <p>- Arthur de amorinm lucena lima</p>
        </div>
    
      
    </section>
  );
}

export default Footer;
