import '../css/header.css'

function Header() {
    return (
        <header className="header">
            <h1>Mood Up</h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;