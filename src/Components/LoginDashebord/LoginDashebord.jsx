import React, { useState } from "react";
import styled from "styled-components";
import ImagemLogo from "../../Image/Imgem-logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LoginDashebord = () => {
  const navigate = useNavigate();
  const validUsers = [
    { email: "usuario1@example.com", senha: "senha123" },
    { email: "usuario2@example.com", senha: "senha456" },
    { email: "usuario3@example.com", senha: "senha789" },
  ];

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorField, setErrorField] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    setUserError("");
    setPasswordError("");
    setErrorField("");
  
    let isError = false;
  
    if (!email && !senha) {
      setUserError("Dados obrigatórios");
      setPasswordError("Dados obrigatórios");
      setErrorField("both");
      isError = true;
    } else {
      if (!email) {
        setUserError("Dados obrigatórios");
        setErrorField("email");
        isError = true;
      }
  
      if (!senha) {
        setPasswordError("Dados obrigatórios");
        setErrorField("senha");
        isError = true;
      }
    }
  
    if (isError) return;
  
    const user = validUsers.find((user) => user.email === email);
  
    if (!user) {
      setUserError("Usuário incorreto");
      setErrorField("email");
    } else if (user.senha !== senha) {
      setPasswordError("Senha incorreta");
      setErrorField("senha");
    } else {
      // Delay para permitir a animação de saída
      setTimeout(() => navigate("/dashebord"), 500); 
    }
  };

  return (
    <>
      <LoginContainer
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      >
        <LogoContainer>
          <img src={ImagemLogo} alt="Imagem da logo da marca" />
        </LogoContainer>
        <SessaoLogin>
          <LoginBox>
            <TituloLogin>
              <h1>Login</h1>
            </TituloLogin>
            <LinhaHorizontal />
            <CampoLogin>
              <CampoBox>
                <label htmlFor="email">Usuário:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setUserError("");
                  }}
                  className={errorField === "email" || errorField === "both" ? "input-error" : ""}
                />
                {userError && errorField === "email" && (
                  <ErrorMensagem>{userError}</ErrorMensagem>
                )}
              </CampoBox>
              <CampoBox>
                <label htmlFor="senha">Senha:</label>
                <SenhaContainer>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="senha"
                    id="senha"
                    value={senha}
                    onChange={(e) => {
                      setSenha(e.target.value);
                      setPasswordError("");
                    }}
                    className={errorField === "senha" || errorField === "both" ? "input-error" : ""}
                  />
                  <EyeIcon onClick={() => setPasswordVisible(!passwordVisible)}>
                    {passwordVisible ? <FaEyeSlash className="Icone-olho" /> : <FaEye className="Icone-olho" />}
                  </EyeIcon>
                </SenhaContainer>
                {passwordError && errorField === "senha" && (
                  <ErrorMensagem>{passwordError}</ErrorMensagem>
                )}
              </CampoBox>
              <ButtonBox>
                <button className="butao" onClick={handleLogin}>
                  Login
                </button>
              </ButtonBox>
            </CampoLogin>
          </LoginBox>
        </SessaoLogin>
      </LoginContainer>
    </>
  );
};

export default LoginDashebord;

const LoginContainer = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const SessaoLogin = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  height: 500px;
  width: 500px;
  padding: 20px 30px 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 31.7px -13px rgba(0,0,0,0.75);

  @media (max-width: 768px) {
    padding: 20px;
    width: 90%;
    max-width: 400px;
  }
  
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 450px;
  }
`;

const TituloLogin = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  h1 {
    font-size: 30px;
    font-weight: 500;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 28px;
    }
  }
`;

const CampoLogin = styled.div`
  padding-top: 20px;
  background-color: #fff;
`;

const CampoBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;

  label {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.518);
    font-weight: 500;
    background-color: #fff;
  }

  input {
    height: 40px;
    padding-left: 10px;
    border-radius: 8px;
    border: 2px solid #C6C6C6;
    background-color: #fff;

    &:focus {
      border: 2px solid #C6C6C6;
      outline: none;
    }

    &.input-error {
      border: 2px solid red;
    }
  }

  @media (max-width: 768px) {
    input {
      height: 35px;
    }
  }

  @media (max-width: 1024px) {
    input {
      height: 38px;
    }
  }
`;

const SenhaContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;

  input {
    width: 94%;
  }
`;

const EyeIcon = styled.span`
  margin-left: 5px;
  cursor: pointer;

  .Icone-olho {
    font-size: 18px;
  }
`;

const ButtonBox = styled.div`
  margin-top: 20px;

  .butao {
    width: 100%;
    height: 40px;
    border: none;
    background-color: #7D2626;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .butao {
      font-size: 16px;
    }
  }

  @media (max-width: 1024px) {
    .butao {
      font-size: 17px; 
    }
  }
`;

const ErrorMensagem = styled.p`
  color: red;
  font-size: 10px;
  margin-top: 5px;
`;

const LinhaHorizontal = styled.hr`
  width: 100%;
  border: 1px solid #ccc;
`;
