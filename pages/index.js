import cookie from "cookie-cutter";
import { api } from "../services/api";
import styles from "../styles/index.module.css";

export default function Home() {
  async function clickButton() {
    let user = window.document.getElementById("user").value;
    let password = window.document.getElementById("password").value;

    await api
      .post("/users/login", {
        email: user,
        password: password,
      })
      .then((res) => {
        cookie.set("session", JSON.stringify(res.data[0]));
        window.location.href = "http://localhost:3000/formation";
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }

  return (
    <main className="container">
      <div className="square-box">
        <div className="studyImage">
          <img src="studies.svg" alt="studies" />
        </div>

        <div className="cardData">
          <h1 className={styles.titleHome}>Acesse a área de formação</h1>
          <img src="studies.svg" alt="studies" className="imageMobile" />

          <div className="userInput">
            <input
              id="user"
              className={styles.inputHome}
              placeholder="Digite aqui seu nome de usuário..."
              type="text"
            />
            <input
              id="password"
              className={styles.inputHome}
              placeholder="Digite aqui sua senha..."
              type="password"
            />
          </div>
          <div className="buttonBox">
            <button className="button" onClick={clickButton}>
              Entrar
            </button>
            <a href="./register" className="button">
              Primeira vez aqui
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
