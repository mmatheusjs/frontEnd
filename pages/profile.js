import cookieCutter from 'cookie-cutter'
import { api } from '../services/api'
import styles from '../styles/profile.module.css'
import { useEffect } from 'react'

export default function Profile() {
  async function changeData() {
    let user = JSON.parse(cookieCutter.get('session'))
    let name = window.document.getElementById('name').value
    let email = window.document.getElementById('email').value
    let telephone = window.document.getElementById('telephone').value

    await api
      .put('/users', {
        name: name,
        email: email,
        telephone: telephone,
        id: user.id
      })
      .then(res => {
        alert(res.data.message)
      })
      .catch(error => {
        alert(error.response.data.message)
      })
  }

  async function changePassword() {
    let user = JSON.parse(cookieCutter.get('session'))
    let newPassword = window.document.getElementById('newPassword').value
    let newConfirmedPassword = window.document.getElementById(
      'newConfirmedPassword'
    ).value
    let oldPassword = window.document.getElementById('oldPassword').value

    if (newPassword === newConfirmedPassword) {
      await api
        .put('/users/change_password', {
          id: user.id,
          oldPassword,
          newPassword
        })
        .then(res => {
          alert(res.data.message)
        })
        .catch(error => {
          alert(error.response.data.message)
        })
    } else {
      alert('Senhas diferentes')
    }
  }

  async function deleteAccount() {
    let user = JSON.parse(cookieCutter.get('session'))
    await api
      .delete('/users/delete', {
        data: {
          id: user.id
        }
      })
      .then(res => {
        alert('Conta deletada com sucesso')
        cookieCutter.set('session', '')
        window.location.href = 'http://localhost:3000/'
      })
      .catch(error => {
        // console.log(error)
        alert(error.response.data.message)
      })
  }

  useEffect(() => {
    let user = JSON.parse(cookieCutter.get('session'))

    window.document.getElementById('name').value = user.name
    window.document.getElementById('email').value = user.email
    window.document.getElementById('telephone').value = user.telephone
  }, [])

  return (
    <main className={styles.containerProfile}>
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
                <a href="./schedule">Escala</a>
              </li>
              <li>
                <a href="#">Perfil</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className={styles.profileBox}>
        <section id={styles.personalData} className={styles.sectionContainer}>
          <h1>Meus dados</h1>

          <form name="myData" action="" id="formProfile" className="userInput">
            <div className={styles.field}>
              <label className="defaultText" htmlFor="user">
                Nome de Usuário:
              </label>
              <input
                id="name"
                className={styles.inputProfile}
                placeholder="Digite aqui seu nome de usuário..."
                type="text"
                required
              />
            </div>

            <div className={styles.field}>
              <label className="defaultText" htmlFor="email">
                Email:
              </label>
              <input
                id="email"
                className={styles.inputProfile}
                placeholder="Digite um email válido.."
                type="email"
                required
              />
            </div>

            <div className={styles.field}>
              <label className="defaultText" htmlFor="phone">
                Telefone/Celular:
              </label>
              <input
                id="telephone"
                className={styles.inputProfile}
                placeholder="Digite um telefone para contato.."
                type="number"
                required
              />
            </div>

            <div className="buttonBox">
              <button type="button" className="button" onClick={changeData}>
                Alterar dados
              </button>
            </div>
          </form>
        </section>

        <div className={styles.divider}></div>

        <section
          id={styles.personalPassword}
          className={styles.sectionContainer}
        >
          <h1>Alterar minha senha</h1>

          <form
            name="myPassword"
            action=""
            id={styles.formProfile}
            className="userInput"
          >
            <div className={styles.field}>
              <label className="defaultText" htmlFor="password">
                Senha antiga:
              </label>
              <input
                id="oldPassword"
                className={styles.inputProfile}
                placeholder="Senha antiga"
                type="password"
                required
              />
            </div>
            <div className={styles.field}>
              <label className="defaultText" htmlFor="password">
                Nova senha:
              </label>
              <input
                id="newPassword"
                className={styles.inputProfile}
                placeholder="Digite aqui a sua nova senha.."
                type="password"
                required
              />
            </div>

            <div className={styles.field}>
              <label className="defaultText" htmlFor="password">
                Confirme sua nova senha:
              </label>
              <input
                id="newConfirmedPassword"
                className={styles.inputProfile}
                placeholder="Digite aqui a sua nova senha.."
                type="password"
                required
              />
            </div>

            <div className="buttonBox">
              <button className="button" type="button" onClick={changePassword}>
                Alterar senha
              </button>
            </div>
          </form>
        </section>

        <section id={styles.deleteAccount} className={styles.sectionContainer}>
          <h1>Deletar minha conta</h1>

          <div className="buttonBox">
            <button className="button" type="button" onClick={deleteAccount}>
              Deletar
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
