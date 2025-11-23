import { Outlet, Link, NavLink } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
    return (
        <div className="layout">
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/">
                        <h2>Restaurant App</h2>
                    </Link>
                </div>


                <ul className="navbar-links">
                    <li>
                        <NavLink to="/" end>
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/categorias">
                            Postres
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/todas-categorias">
                            Todas las Categorías
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            Acerca de
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="content">
                <Outlet />
            </div>

            <footer>
                <p>© 2025 Restaurant App</p>
                <Link to="/">Volver al inicio</Link>
            </footer>
        </div>
    );
}
