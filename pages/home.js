import cookieCutter from 'cookie-cutter'
import { useEffect, useState } from 'react'

export default function Home() {
  const [name, setName] = useState('')

  useEffect(() => {
    let user = JSON.parse(cookieCutter.get('session'))
    setName(user.name)
  }, [])

  return (
    <main className="containerHome">
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
      <p> Ola {name}</p>
    </main>
  )
}
