import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="https://marketplace.canva.com/EAFr-fM-LGM/1/0/1600w/canva-logo-tienda-de-moda-y-ropa-aesthetic-elegante-rosa-lCvIUsZGrmU.jpg" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Productos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export { Header }