// import Login from '../teste'
import Head from 'next/head'
import { api } from '../services/api'
import styles from '../styles/index.module.css'

export default function Home() {
  async function clickButton() {
    const result = await api.get('/')
    console.log(result)
    let user = window.document.getElementById('user').value
    let password = window.document.getElementById('password').value
  }

  return (
    <main className="container">
      <div className="studyImage">
        <img src="studies.svg" alt="studies"></img>
      </div>

      <div className="cardData">
        <h1 className={styles.titleHome}>Acesse a área de formação</h1>
        <img src="studies.svg" alt="studies" className="imageMobile"></img>

        <div className="userInput">
          <input
            id="user"
            className={styles.inputHome}
            placeholder="Digite aqui seu nome de usuário..."
            type="text"
          />
          <input
            id="password"
            className={styles.inputHome}
            placeholder="Digite aqui sua senha..."
            type="password"
          />
        </div>

        <div className="buttonBox">
          <button className="button" onClick={clickButton}>
            Entrar
          </button>
          <a href="./register" className="button">
            Primeira vez aqui
          </a>
        </div>
      </div>
    </main>
  )
}
