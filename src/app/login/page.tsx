"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import '../styles/login.scss';

const Login = () => {
  const [email, setEmail] = useState<string>("")
  const [senha, setSenha] = useState<string>("")
  const [error, setError] = useState<string>("")

  const dadosLogin = {
    email,
    senha,
  };

  const dadosDoBancoSimulado = {
    email: "kaiquesteck@teste.com",
    senha: "12345",
  };
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === dadosDoBancoSimulado.email && senha === dadosDoBancoSimulado.senha) {
      console.log("Login autorizado!");
      setError("");
      router.push("./eventos");
    } else {
      setError("E-mail ou senha incorretos.");
    }
  };

  return (
    <div id="app">
      <main>
        <div className="login-container">
          <div className="titulo">
            <img className="img-logo" src="/assets/icons/logo.svg" alt="Logo" />
            <h1>Bem-vindo de volta</h1>
            <h2>Entre com sua conta para acessar o painel.</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email" className="label-email">E-mail</label>
              <input type="text" name="email" placeholder="seunome@seuservidor.com" value={email} onChange={(e => setEmail(e.target.value))} />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password" className="label-password">Senha</label>
              <input type="password" name="password" placeholder="Digite aqui" value={senha} onChange={(e => setSenha(e.target.value))} />
              <img src="/visualizar.svg" alt="olho" className="input-icon" />
            </div>

            <button className="btn" type="submit">Enviar</button>
          </form>
        </div>
      </main>

      <aside>
        <div className="aside-container">
          <img src="/assets/icons/banner.svg" alt="banner" />
        </div>
      </aside>
    </div>
  );
};

export default Login;