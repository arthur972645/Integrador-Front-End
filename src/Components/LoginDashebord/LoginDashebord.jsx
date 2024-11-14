import React, { useState } from "react";
import "./LoginDashebord.css";
import ImagemLogo from "../../Image/Imgem-logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importando ícones de olho

const LoginDashebord = () => {
  // Dados fictícios de usuários e senhas (simulando um banco de dados)
  const validUsers = [
    { email: "usuario1@example.com", senha: "senha123" },
    { email: "usuario2@example.com", senha: "senha456" },
    { email: "usuario3@example.com", senha: "senha789" }
  ];

  // Estados para os campos de email, senha e mensagens de erro
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [userError, setUserError] = useState(""); // Mensagem de erro do usuário
  const [passwordError, setPasswordError] = useState(""); // Mensagem de erro da senha
  const [errorField, setErrorField] = useState(""); // Qual campo está com erro
  const [passwordVisible, setPasswordVisible] = useState(false); // Estado para alternar a visibilidade da senha

  // Função de login
  const handleLogin = () => {
    // Resetando mensagens de erro
    setUserError("");
    setPasswordError("");
    setErrorField("");

    let isError = false;

    // Verifica se os campos estão vazios
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

    // Se houver erro, não prossegue
    if (isError) return;

    // Verificação se os dados do usuário e senha estão corretos
    const user = validUsers.find((user) => user.email === email);

    if (!user) {
      setUserError("Usuário incorreto");
      setErrorField("email");
    } else if (user.senha !== senha) {
      setPasswordError("Senha incorreta");
      setErrorField("senha");
    } else {
      // Redireciona para a próxima página sem alert
      window.location.href = "/pagina-proxima";
    }
  };

  return (
    <article className="login">
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
                  setUserError(""); // Remove mensagem de erro ao digitar
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
                  type={passwordVisible ? "text" : "password"} // Alterna entre 'text' e 'password'
                  name="senha"
                  id="senha"
                  value={senha}
                  onChange={(e) => {
                    setSenha(e.target.value);
                    setPasswordError(""); // Remove mensagem de erro ao digitar
                  }}
                  className={errorField === "senha" || errorField === "both" ? "input-error" : ""}
                />
                <span
                  className="eye-icon"
                  onClick={() => setPasswordVisible(!passwordVisible)} // Alterna a visibilidade da senha
                >
                  {passwordVisible ? <FaEyeSlash  className="Icone-olho" /> : <FaEye  className="Icone-olho"/>} {/* Exibe o ícone de olho */}
                </span>
              </div>
              {passwordError && errorField === "senha" && (
                <p className="error-message">{passwordError}</p>
              )}
            </div>
            <div className="box-botao">
              <button className="butao" onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default LoginDashebord;
