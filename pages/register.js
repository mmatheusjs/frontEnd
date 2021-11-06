import cookie from "cookie-cutter"
import { api } from '../services/api'
import styles from '../styles/register.module.css'

export default function Register() {
  async function clickButton() {
    let user = window.document.getElementById('user').value
    let email = window.document.getElementById('email').value
    let telephone = window.document.getElementById('phone').value
    let password = window.document.getElementById('password').value

    await api
      .post('/users', {
        name: user,
        email: email,
        password: password,
        telephone: telephone
      })
      .then(res => {
        cookie.set('session', JSON.stringify(res.data[0]))
        window.location.href = 'http://localhost:3000/formation'
      })
      .catch(error => {
        alert(error.response.data.message)
      })
  }
  return (
    <main className="container">
      <div className="studyImage">
        <img src="studies.svg" alt="studies"></img>
      </div>

      <div id={styles.cardDataOfRegister} className="cardData">
        <h1 className={styles.titleRegister}>Faça o seu cadastro</h1>
        <img src="studies.svg" alt="studies" className="imageMobile"></img>

        <form action="" id={styles.formRegister} className="userInput">
          <div className={styles.defaultForm}>
            <label className="defaultText" htmlFor="user">
              Nome de Usuário
            </label>
            <input
              id="user"
              className={styles.inputRegister}
              placeholder="Digite aqui seu nome de usuário..."
              type="text"
              required
            />
          </div>

          <div className={styles.defaultForm}>
            <label className="defaultText" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className={styles.inputRegister}
              placeholder="Digite um email válido.."
              type="email"
              required
            />
          </div>

          <div className={styles.defaultForm}>
            <label className="defaultText" htmlFor="phone">
              Telefone/Celular
            </label>
            <input
              id="phone"
              className={styles.inputRegister}
              placeholder="Digite um telefone para contato.."
              type="tel"
              required
            />
          </div>

          <div className={styles.defaultForm}>
            <label className="defaultText" htmlFor="password">
              Senha
            </label>
            <input
              id="password"
              className={styles.inputRegister}
              placeholder="Senha com no mínimo 8 letras e/ou números.."
              type="password"
              required
            />
          </div>

          <div className={styles.defaultForm}>
            <label className="defaultText" htmlFor="missa">
              Disponibilidade de horário
            </label>
            <select
              name="escala_missas"
              id="missa"
              className={styles.inputRegister}
              required
            >
              <option value="" disabled selected>
                Escolha uma missa para servir..
              </option>
              <optgroup label="Sábado">
                <option value="">07h00</option>
                <option value="">17h00</option>
                <option value="">20h00</option>
              </optgroup>

              <optgroup label="Domingo">
                <option value="">07h00</option>
                <option value="">10h30</option>
                <option value="">18h30</option>
              </optgroup>
            </select>
          </div>
        </form>
        <div className="buttonBox">
          <button
            id={styles.createAcc}
            className="button"
            onClick={clickButton}
          >
            Criar Conta
          </button>
        </div>
      </div>

      {/* </div> */}
    </main>
  )
}
