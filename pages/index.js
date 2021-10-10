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
    <main className={styles.loginContainer}>
      <div id="firstPage">
        {/* <div class="homeImage"> */}
        <img
          src="https://images.unsplash.com/photo-1565567852159-38204cd84f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        ></img>
        {/* </div> */}

        <div id="cardLogin">
          <h1>Acesse sua área de formação</h1>

          <div class="userInput">
            <input id="user" placeholder="Acólito" type="text" />
            <input id="password" placeholder="Senha" type="password" />

            <div class="buttonBox">
              <button class="button" onClick={clickButton}>
                Entrar
              </button>
              <a href="#" class="button">
                Criar conta
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
