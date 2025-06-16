"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import styles from '../styles/login.module.scss';

const Login = () => {
  const [email, setEmail] = useState<string>("kaiquesteck@teste.com")
  const [senha, setSenha] = useState<string>("12345")
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
    <div className={styles.container}>
      <div id={styles.app}>
        <main className={styles["main-content"]}>
          <div className={styles["login-container"]}>
            <div className={styles["title-box"]}>
              <img className={styles["img-logo"]} src="/assets/icons/logo.svg" alt="Logo" />
              <h1 className={styles["title"]}>Bem-vindo de volta</h1>
              <h2 className={styles["subtitle"]}>Entre com sua conta para acessar o painel.</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles["input-wrapper"]}>
                <label htmlFor="email" className={styles["label-email"]}>E-mail</label>
                <input type="text" name="email" placeholder="seunome@seuservidor.com" value={email} onChange={(e => setEmail(e.target.value))} />
              </div>

              <div className={styles["input-wrapper"]}>
                <label htmlFor="password" className={styles["label-password"]}>Senha</label>
                <input type="password" name="password" placeholder="Digite aqui" value={senha} onChange={(e => setSenha(e.target.value))} />
                <img src="/visualizar.svg" alt="olho" className={styles["input-icon"]} />
              </div>

              <button className={styles.btn} type="submit">Enviar</button>
            </form>
          </div>
        </main>

        <aside className={styles["aside-content"]}>
          <div>
            <img src="/assets/icons/banner.svg" alt="banner" />
          </div>
        </aside>
      </div>
    </div>

  );
};

export default Login;