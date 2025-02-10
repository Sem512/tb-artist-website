import '../css/Header.css';
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
    };

    return (
        <header id='header'>
            <div className='logo' onClick={() => navigate("/")}>
                <p>TB</p>
            </div>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* Navigation Menu */}
            <ul className={isMenuOpen ? "open" : ""}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                        onClick={toggleMenu} // Close menu on link click
                    >
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/bio"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                        onClick={toggleMenu}
                    >
                        BIO
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/works"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                        onClick={toggleMenu}
                    >
                        WORKS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/shows"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                        onClick={toggleMenu}
                    >
                        SHOWS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                        onClick={toggleMenu}
                    >
                        CONTACT
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;