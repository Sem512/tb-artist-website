import '../css/Footer.css'

export default function Footer(){
    return(
        <footer>
            <div className='logo'>
                <p>TB</p>
            </div>

            <ul>
                <li>&copy;2025 Tewolde Berhan</li>
                <li>Brinzart.com</li>
                <li className='link' onClick={() => navigate("/contact")}>Contact</li>
                <li>Site by SSM</li>
            </ul>
        </footer>
    )
}