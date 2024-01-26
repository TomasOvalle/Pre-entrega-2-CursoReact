import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="navbar-brand"><NavLink className="nav-link" to='/'>Inicio</NavLink></li>
                    </ul>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="nav-link" to="/Mangas/:MangasId">Mangas</NavLink></li>
                            <li className="nav-item"></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/Novelas/:NovelasId">Novelas</NavLink></li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Extras
                            </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Box-sets</a></li>
                        <li><a className="dropdown-item" href="#">Art-books</a></li>
                        <li><a className="dropdown-item" href="#">Ofertas</a></li>
                        </ul>
                            </li>
                            <li><CartWidget /></li>
                        </ul>
                    </div>
                </div>
            </nav>
    </header>
    )
}

export default NavBar