'use client'
import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../styles/table.scss';


const inscricoes = () => {
    const pathname = usePathname();
    return (
        <div className="container">
            <aside className="sidebar">
                <img className="img-logo" src=".\assets\icons\logo.svg" alt="Logo" />
                <nav className="menu">
                    <label className="label-menu">Menu</label>

                    <Link href="./eventos" className={`link ${pathname === '/eventos' ? 'active' : ''}`}>
                    <img className="img-icon" src=".\assets\icons\icon-eventos.svg" alt="Logo" /> 
                    Eventos</Link>

                    <Link href="./dashboard" className={`link ${pathname === '/dashboard' ? 'active' : ''}`}>   
                    <img className="img-icon" src=".\assets\icons\icon-dashboard.svg" alt="Logo" />
                    Dashboard</Link>

                    <Link href="./equipes" className={`link ${pathname === '/equipes' ? 'active' : ''}`}> 
                    <img className="img-icon" src=".\assets\icons\icon-equipes.svg" alt="Logo" />
                    Equipes</Link>

                    <Link href="./inscricoes" className={`link ${pathname === '/inscricoes' ? 'active' : ''}`}> 
                    <img className="img-icon" src=".\assets\icons\icon-inscricao.svg" alt="Logo" />
                    Inscrições</Link>

                    <div className="user-info">
                        <img className="foto-perfil" src="..\perfilFoto.svg" alt="Foto do usuário" />
                        <div className="info">
                            <strong>Kaique Steck</strong>
                            <span>Administrador</span>
                        </div>
                        <a href="#"><img className="img-icon" src=".\assets\icons\icon-dados.svg" alt="Logo" />  Alterar dados</a>
                        <a href="./login"><img className="img-icon" src=".\assets\icons\icon-sair.svg" alt="Logo" />  Sair</a>
                    </div>
                </nav>
            </aside>

            <main className="main-content">
                <header>
                    <h2>Bem-vindo de volta, <strong>Kaique Steck</strong></h2>
                    <h3>Inscrições</h3>
                </header>
            </main>
        </div>
    )
}
export default inscricoes;