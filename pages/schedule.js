import cookieCutter from 'cookie-cutter'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import styles from '../styles/schedule.module.css'

export default function Schedule() {
  const [name, setName] = useState('')

  useEffect(() => {
    let user = JSON.parse(cookieCutter.get('session'))
    setName(user.name)
  }, [])

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

      <div className={styles.scheduleBox}>
        <section className={styles.sectionContainer}>
          <h1>Horários de Missas</h1>

          <form action="" id={styles.formMass} className="massInput">
            <p>
              Ola {name}, escolha abaixo sua missa conforme sua disponibilidade:
            </p>

            <div className={styles.defaultForm}>
              <label className="defaultText" htmlFor="first_week">
                <input
                  type="checkbox"
                  id="first_week"
                  value="first_week"
                  className={styles.inputSchedule}
                ></input>
                <span>1ª Semana</span>
              </label>
            </div>

            <div className={styles.defaultForm}>
              <label className="defaultText" htmlFor="second_week">
                <input
                  type="checkbox"
                  id="second_week"
                  value="second_week"
                  className={styles.inputSchedule}
                ></input>
                <span>2ª Semana</span>
              </label>
            </div>
            <div className={styles.defaultForm}>
              <label className="defaultText" htmlFor="third_week">
                <input
                  type="checkbox"
                  id="third_week"
                  value="third_week"
                  className={styles.inputSchedule}
                ></input>
                <span>3ª Semana</span>
              </label>
            </div>

            <div className={styles.defaultForm}>
              <label className="defaultText" htmlFor="fourth_week">
                <input
                  type="checkbox"
                  id="fourth_week"
                  value="fourth_week"
                  className={styles.inputSchedule}
                ></input>
                <span>4ª Semana</span>
              </label>
            </div>

            <div className={styles.defaultForm}>
              <label className="defaultText" htmlFor="fifth_week">
                <input
                  type="checkbox"
                  id="fifth_week"
                  value="fifth_week"
                  className={styles.inputSchedule}
                ></input>
                <span>5ª Semana</span>
              </label>
            </div>

            <div className={styles.defaultForm}>
              <label className="defaultText" htmlFor="missa">
                Disponibilidade de horário
              </label>
              <select
                name="escala_missas"
                id="missa"
                className={styles.inputSchedule}
                required
              >
                <option value="" disabled defaultValue>
                  Escolha uma missa para servir..
                </option>
                <optgroup label="Segunda">
                  <option value="mon07h00">07h00</option>
                  <option value="mon18h30">18h30</option>
                </optgroup>
                <optgroup label="Terça">
                  <option value="tue07h00">07h00</option>
                  <option value="tue19h30">19h30</option>
                </optgroup>
                <optgroup label="Quarta">
                  <option value="wed07h00">07h00</option>
                  <option value="wed14h00">14h00</option>
                </optgroup>
                <optgroup label="Quinta">
                  <option value="thu07h00">07h00</option>
                  <option value="thu19h00">19h00</option>
                </optgroup>
                <optgroup label="Sexta">
                  <option value="fri07h00">07h00</option>
                  <option value="fri19h30">19h30</option>
                </optgroup>
                <optgroup label="Sábado">
                  <option value="sat07h00">07h00</option>
                  <option value="sat17h00">17h00</option>
                  <option value="sat20h00">20h00</option>
                </optgroup>
                <optgroup label="Domingo">
                  <option value="sun07h00">07h00</option>
                  <option value="sun08h00">08h45</option>
                  <option value="sun10h30">10h30</option>
                  <option value="sun15h00">15h00</option>
                  <option value="sun18h30">18h30</option>
                </optgroup>
              </select>
            </div>

            <div className="buttonBox">
              <button
                id={styles.createAcc}
                className="button"
                // onClick={clickButton}
              >
                Criar grupo
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}
