'use client'
import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Style from '../styles/table.module.scss';

const Eventos = () => {
    const pathname = usePathname();

    return (
        <div className={Style.container}>
            <aside className={Style.sidebar}>
                <img className={Style.imgLogo} src="./assets/icons/logo.svg" alt="Logo" />

                <nav className={Style.menu}>
                    <label className={Style.labelMenu}>Menu</label>

                    <Link href="./eventos" className={`${Style.link} ${pathname === '/eventos' ? Style.active : ''}`}>
                        <img className={Style.imgIcon} src="./assets/icons/icon-eventos.svg" alt="Logo" />
                        Eventos
                    </Link>

                    <Link href="./dashboard" className={`${Style.link} ${pathname === '/dashboard' ? Style.active : ''}`}>   
                        <img className={Style.imgIcon} src="./assets/icons/icon-dashboard.svg" alt="Logo" />
                        Dashboard
                    </Link>

                    <Link href="./equipes" className={`${Style.link} ${pathname === '/equipes' ? Style.active : ''}`}> 
                        <img className={Style.imgIcon} src="./assets/icons/icon-equipes.svg" alt="Logo" />
                        Equipes
                    </Link>

                    <Link href="./inscricoes" className={`${Style.link} ${pathname === '/inscricoes' ? Style.active : ''}`}> 
                        <img className={Style.imgIcon} src="./assets/icons/icon-inscricao.svg" alt="Logo" />
                        Inscrições
                    </Link>

                    <div className={Style.userInfo}>
                        <img className={Style.fotoPerfil} src="../perfilFoto.svg" alt="Foto do usuário" />
                        <div className={Style.info}>
                            <strong>Kaique Steck</strong>
                            <span>Administrador</span>
                        </div>
                        <a href="#" className={Style.a}><img className={Style.imgIcon} src="./assets/icons/icon-dados.svg" alt="Logo" />  Alterar dados</a>
                        <a href="./login" className={Style.a}><img className={Style.imgIcon} src="./assets/icons/icon-sair.svg" alt="Logo" />  Sair</a>
                    </div>
                </nav>
            </aside>

            <main className={Style.mainContent}>
                <header>
                    <h2 className={Style.h2}>Bem-vindo de volta, <strong>Kaique Steck</strong></h2>
                    <h3 className={Style.h3}>Todos eventos</h3>
                </header>

                <div className={Style.events}>
                    <div className={Style.eventControls}>
                        <input className={Style.eventInput} type="text" placeholder="Buscar eventos" />
                        <button className={Style.btn}>+ Inserir novo</button>
                    </div>

                    <table className={Style.eventTable}>
                        <thead>
                            <tr className={Style.titleEventTable}>
                                <th className={Style.cell}>Nome do evento</th>
                                <th className={Style.cell}>Total de equipes</th>
                                <th className={Style.cell}>Status</th>
                                <th className={Style.cell}>Data</th>
                                <th className={Style.cell}></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={Style.cell}>Clube do Laço Coração Pantaneiro</td>
                                <td className={Style.cell}>10</td>
                                <td className={Style.cell}><span className={`${Style.status} ${Style.ativo}`}>● </span>Ativo</td>
                                <td className={Style.cell}>09 a 11 de Junho</td>
                                <td className={`${Style.cell} ${Style.subMenu}`}>⋮</td>
                            </tr>
                            <tr>
                                <td className={Style.cell}>Clube do Laço Coração Pantaneiro</td>
                                <td className={Style.cell}>10</td>
                                <td className={Style.cell}><span className={`${Style.status} ${Style.ativo}`}>● </span>Ativo</td>
                                <td className={Style.cell}>09 a 11 de Junho</td>
                                <td className={`${Style.cell} ${Style.subMenu}`}>⋮</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className={Style.pagination}>
                        <button className={Style.btn2}>Anterior</button>
                        <button className={Style.btn2}>1</button>
                        <button className={Style.btn2}>2</button>
                        <button className={Style.btn2}>3</button>
                        <button className={Style.btn2}>Próxima</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Eventos;