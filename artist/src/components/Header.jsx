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
                <img src="https://tewoldebrehan.art/wp-content/uploads/2017/11/retina_artist2.png" alt="" />
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
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/bio"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                        onClick={toggleMenu}
                    >
                        Meet Tewolde
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/works"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                        onClick={toggleMenu}
                    >
                        My Works
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                        onClick={toggleMenu}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;