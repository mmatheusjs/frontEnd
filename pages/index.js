// import Login from '../teste'
import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function Home() {
  // let title = 'Faça seu login'
  function clickButton() {
    let user = window.document.getElementById('user').value
    let password = window.document.getElementById('password').value
    alert(`Seu usuário é: ${user} e sua senha é ${password}`)
  }
  return (
    <main className="containerData">
      <div className="studyImage">
        <img src="studies.svg" alt="studies"></img>
      </div>

      <div className="cardData">
        <h1 className="title">Acesse a área de formação</h1>

        <div className="userInput">
          <input
            id="user"
            placeholder="Digite aqui seu nome de usuário..."
            type="text"
          />
          <input
            id="password"
            placeholder="Digite aqui sua senha..."
            type="password"
          />
        </div>

        <div className={styles.buttonBox}>
          <button className="button" onClick={clickButton}>
            Entrar
          </button>
          <a href="#" className="button">
            Primeira vez aqui
          </a>
        </div>
      </div>
    </main>
  )
}
