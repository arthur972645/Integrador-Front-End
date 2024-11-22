import styled from 'styled-components';

const SessaoTextoinformativo = styled.section`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100px;
`
const DivTextoinformativo = styled.div`
  width: 60%;
`
const PTextoinformativo = styled.p`
  font-size: 20px;
  font-weight: 500;  
  margin-bottom: 0rem;
  
`


const LinhaHorizontal = styled.hr`
  width: 100%;
  border: 1px solid #ccc;
`;



const TextoInformativo = ({Informacao}) => {
  return(
    <SessaoTextoinformativo>
      <DivTextoinformativo>
        <PTextoinformativo>{Informacao}</PTextoinformativo>
         
            <LinhaHorizontal />
         
      </DivTextoinformativo>
    </SessaoTextoinformativo>
  )
}

export default TextoInformativo