import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function Register() {
  return (
    <main className="containerData">
      <div id="registerPage" className="dataUser">
        <img src="" alt=""></img>

        <div className="cardData">
          <h1 className="title">Testando testando</h1>

          <form action="" id="formRegister" className="userInput">
            <div className="defaultForm">
              <label for="user">Nome de Usuário</label>
              <input
                id="user"
                placeholder="Digite aqui seu nome de usuário..."
                type="text"
              />
            </div>

            <div className="defaultForm">
              <label for="email">Email</label>
              <input
                id="email"
                placeholder="Digite um email válido.."
                type="email"
              />
            </div>

            <div className="defaultForm">
              <label for="phone">Telefone/Celular</label>
              <input
                id="phone"
                placeholder="Digite um telefone para contato.."
                type="tel"
              />
            </div>

            <div className="defaultForm">
              <label for="password">Digite sua senha:</label>
              <input
                id="password"
                placeholder="Senha com no mínimo 8 letras e/ou números.."
                type="password"
              />
            </div>

            <div className="defaultForm">
              <label for="missa">Disponibilidade de horário</label>
              <select name="escala_missas" id="missa" className="registerPage">
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
        </div>

        <div className="buttonBox">
          <button className="button">Entrar</button>
          <a href="#" className="button">
            Criar Conta
          </a>
        </div>
      </div>
    </main>
  )
}
