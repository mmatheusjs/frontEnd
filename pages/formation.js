import cookieCutter from "cookie-cutter";
import { useEffect, useState } from "react";

export default function Formation() {
  const [name, setName] = useState("");

  useEffect(() => {
    let user = JSON.parse(cookieCutter.get("session"));
    setName(user.name);
  }, []);

  return (
    <main className="containerFormation">
      <header id="header">
        <nav className="navBox">
          <a className="logo" href="#">
            Logo??
          </a>

          <div className="menu">
            <ul className="linkList">
              <li>
                <a href="#">Início</a>
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
      <p> Ola {name}</p>
    </main>
  );
}
