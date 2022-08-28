import React from 'react'
import './styled.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header-wrapper">
      <div>
        <div className="checkbox-container">
          <div className="checkbox-wrapper">
            <input type="checkbox" id="toggle" />
            <label className="checkbox" for="toggle">
              <div className="trace"></div>
              <div className="trace"></div>
              <div className="trace"></div>
            </label>

            <div className="menu"></div>

            <nav className="menu-items">
              <ul>
                <li>
                  <Link to="/newBuy"> Comprar Livros</Link>
                </li>
                <li>
                  <Link to="/newSell"> Vender Livros</Link>
                </li>
              </ul>
              <ul>
                <li>CONSULTA</li>
                <li>
                  <Link to="/authors">Autores</Link>
                </li>
                <li>
                  <Link to="/books">Livros</Link>
                </li>
                <li>
                  <Link to="/clients">Clientes</Link>
                </li>
              </ul>
              <ul>
                <li>CADASTRO</li>
                <li>
                  <Link to="/authorsRegister">Autores</Link>
                </li>
                <li>
                  <Link to="/booksRegister">Livros</Link>
                </li>
                <li>
                  <Link to="/clientsRegister">Clientes</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="brand-container">
        <Link to="/">
          <h1>TQI BOOKSTORE</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header
