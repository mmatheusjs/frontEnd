import Head from 'next/head'
import styles from '../styles/formation.module.css'

export default function Formation() {
  return (
    <main className="containerFormation">
      <header id="header">
        <nav className="navBox">
          <a className="logo" href="#">
            Logo??
          </a>

          <div className="menu">
            <ul className="linkList">
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Aulas</a>
              </li>
              <li>
                <a href="#">Perfil</a>
              </li>
            </ul>
          </div>
          {/* <div className="toggle icon-menu">...</div>
          <div className="toggle icon-close">X</div> */}
        </nav>
      </header>
    </main>
  )
}
