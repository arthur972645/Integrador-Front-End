import React, { useState } from "react";
import "./LoginDashebord.css";
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
      setTimeout(() => navigate("/dashebord"), 500); // Redireciona após 500ms para finalizar a animação
    }
  };

  return (
    <motion.div
      className="login"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <div className="box-imagem-logo">
        <img src={ImagemLogo} alt="Imagem da logo da marca" />
      </div>
      <section className="sessao-login">
        <div className="box-login">
          <div className="box-palavra-login">
            <h1>Login</h1>
          </div>
          <hr className="linha" />
          <div className="box-campos">
            <div className="box-email">
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
                <p className="error-message">{userError}</p>
              )}
            </div>
            <div className="box-senha">
              <label htmlFor="senha">Senha:</label>
              <div className="senha-container">
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
                <span
                  className="eye-icon"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaEyeSlash className="Icone-olho" /> : <FaEye className="Icone-olho" />}
                </span>
              </div>
              {passwordError && errorField === "senha" && (
                <p className="error-message">{passwordError}</p>
              )}
            </div>
            <div className="box-botao">
              <button className="butao" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default LoginDashebord;
