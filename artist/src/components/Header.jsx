import '../css/Header.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to scroll smoothly to a section
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setActiveSection(id);
        setIsMenuOpen(false); // Close menu after click
    };

    // Detect scroll and set active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "works", "contact"];
            let currentSection = "home"; // Default

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = id;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header id="header">
            <div className="logo" onClick={() => navigate("/")}>
                <img src="https://tewoldebrehan.art/wp-content/uploads/2017/11/retina_artist2.png" alt="Logo" />
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
                    <a
                        href="#home"
                        className={activeSection === "home" ? "active-link" : ""}
                        onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#about"
                        className={activeSection === "about" ? "active-link" : ""}
                        onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
                    >
                        Meet Tewolde
                    </a>
                </li>
                <li>
                    <a
                        href="#works"
                        className={activeSection === "works" ? "active-link" : ""}
                        onClick={(e) => { e.preventDefault(); scrollToSection("works"); }}
                    >
                        My Works
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className={activeSection === "contact" ? "active-link" : ""}
                        onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
