import cookieCutter from 'cookie-cutter'
import { api } from '../services/api'
import styles from '../styles/invite.module.css'
import { useEffect } from 'react'

export default function Invite() {
  function inviteUser() {
    let user = JSON.parse(cookieCutter.get('session'))

    const name = window.document.getElementById('name').value
    const telephone = window.document.getElementById('inviteTelephone').value

    if (telephone.lenght < 11) {
      return alert('O telefone deve conter DD e o número')
    }

    window.location.href = `https://api.whatsapp.com/send?phone=55${telephone}&text=Ola%20${name}%20estou%20te%20convidando%20a%20participar%20do%20meu%20grupo,%20so%20clicar%20nesse%20link%20http://localhost:3000/register?manager_id=${user.id}`
  }

  return (
    <main>
      <header id="header">
        <nav className="navBox">
          <a className="logo" href="#">
            Logo??
          </a>

          <div className="menu">
            <ul className="linkList">
              <li>
                <a href="./home">Início</a>
              </li>
              <li>
                <a href="#">Aulas</a>
              </li>
              <li>
                <a href="./profile">Perfil</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="inviteBox">
        <section id="registerdUser" className={styles.inviteContainer}>
          <h1> Adicionar um novo membro</h1>

          <form name="invite" action="" id="formInvite" className="userInput">
            <div className={styles.field}>
              <label className="defaultText" htmlFor="user">
                Telefone:
              </label>
              <input
                id="telephone"
                className={styles.inputInvite}
                placeholder="Digite aqui o telefone do usuário..."
                type="text"
                required
              />
            </div>

            <div className="buttonBox">
              <button type="button" className="button">
                Adicionar
              </button>
            </div>
          </form>
        </section>

        <section id="newUser" className={styles.inviteContainer}>
          <h1> Convidar um novo usuário</h1>
          <div className={styles.field}>
            <label className="defaultText" htmlFor="name">
              Nome do Usuário:
            </label>
            <input
              id="name"
              className={styles.inputInvite}
              placeholder="Digite aqui seu nome de usuário..."
              type="text"
              required
            />
          </div>

          <div className={styles.field}>
            <label className="defaultText" htmlFor="phone">
              Telefone:
            </label>
            <input
              id="inviteTelephone"
              className={styles.inputInvite}
              placeholder="Telefone"
              type="number"
              required
            />
          </div>

          <div className="buttonBox">
            <button type="button" className="button" onClick={inviteUser}>
              Convidar
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
