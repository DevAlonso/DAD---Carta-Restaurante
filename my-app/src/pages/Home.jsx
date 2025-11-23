import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
    return (
        <div className='home'>
            <h1>Bienvenido a Restaurant App</h1>
            <p>Explora nuestro delicioso menú de postres</p>

            <div className='home-cards'>
                <div className='card'>
                    <h3>Ver Postres</h3>
                    <p>Descubre nuestra selección de postres deliciosos</p>
                    <Link to='/categorias' className='btn'>Explorar</Link>
                </div>
                
                <div className='card'>
                    <h3>Todas las Categorías</h3>
                    <p>Navega por todas las categorías disponibles</p>
                    <Link to='/todas-categorias' className='btn'>Ver categorías</Link>
                </div>
                
                <div className='card'>
                    <h3>Acerca de nosotros</h3>
                    <p>Conoce más sobre nuestra historia</p>
                    <Link to='/about' className='btn'>Más info</Link>
                </div>
            </div>
        </div>
    )
}
