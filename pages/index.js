import Login from '../teste'
import Head from 'next/head'

export default function Home() {
  let title = 'Faça seu login'
  function clickButton() {
    let user = window.document.getElementById('user').value
    let password = window.document.getElementById('password').value
    alert(`Seu usuário é: ${user} e sua senha é ${password}`)
  }
  return (
    <div>
      <Login title={title} />

      <h1>{title}</h1>
      <input id="user" placeholder="Acólito" type="text" />
      <input id="password" placeholder="Senha" type="password" />
      <button onClick={clickButton}>Clicar</button>
    </div>
  )
}
