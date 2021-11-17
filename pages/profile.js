import cookieCutter from 'cookie-cutter'
import { api } from '../services/api'
import styles from '../styles/profile.module.css'

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
                <a href="#">Aulas</a>
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

          <form
            name="myData"
            action=""
            id={styles.formProfile}
            className="userInput"
          >
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
                Alterar
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
                id="password"
                className={styles.inputProfile}
                placeholder="Digite aqui a sua nova senha.."
                type="password"
                required
              />
            </div>
            <div className="buttonBox">
              <button className="button">Alterar</button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}
