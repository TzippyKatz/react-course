import { Link } from 'react-router-dom';

import '../css/header.css'

function Header() {
    return (
        <header className="header">
            <h1>Mood Up</h1>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/ex">Ex.</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;