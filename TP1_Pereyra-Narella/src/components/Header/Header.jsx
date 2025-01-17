import "./Header.css"

const Header = () => {
return(
    <header>
        <div className="logo">
<img src="https://github.com/NarellaPereyra.png"/>
        </div>
        <nav>
            <ul>
                <li><a href="#">Products</a></li>
                <li><a href="#">Info</a></li>
            </ul>
        </nav>
    </header>
)
}
export { Header }