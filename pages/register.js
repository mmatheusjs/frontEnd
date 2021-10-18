import Head from 'next/head'
// import styles from '../styles/index.module.css'
import styles from '../styles/register.module.css'

export default function Register() {
  return (
    <main className="containerData">
      {/* <div id="registerPage" className="dataUser"> */}
      <div className="studyImage">
        <img src="studies.svg" alt="studies"></img>
      </div>

      <div className="cardData">
        <h1 className={styles.titleRegister}>Faça o seu cadastro</h1>

        <form action="" id={styles.formRegister} className="userInput">
          <div className={styles.defaultForm}>
            <label className="defaultText" for="user">
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
            <label className="defaultText" for="email">
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
            <label className="defaultText" for="phone">
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
            <label className="defaultText" for="password">
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
            <label className="defaultText" for="missa">
              Disponibilidade de horário
            </label>
            <select
              name="escala_missas"
              id="missa"
              className={styles.inputRegister}
              required
            >
              <optgroup label="Sábado">
                <option value="" disabled selected>
                  Escolha uma missa para servir..
                </option>
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
          <button id={styles.createAcc} className="button">
            Criar Conta
          </button>
        </div>
      </div>

      {/* </div> */}
    </main>
  )
}
