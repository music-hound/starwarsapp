import { Link, useLocation } from "react-router-dom";
import '../styles/Header.css';

const Header = ( )=>{

    const location = useLocation();
    
    return (
        <header>
            <div className="container">
                <img className="headerLogo" src={`${import.meta.env.BASE_URL}/logo.png`} alt="LogoStarWars" />
                <nav>
                    <ul>
                        <li>
                            <Link className={`navButton ${location.pathname === '/' && 'underline'}`} to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link className={`navButton ${location.pathname === '/characters' && 'underline'}`} to={'/characters'}>Characters</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;