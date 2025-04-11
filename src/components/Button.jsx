import { Link } from 'react-router-dom';
import '../styles/Button.css';

const Button = ( { to, children } )=>{
    return (
        <Link to={to} className='button'>
            {children}
        </Link>
    )
}

export default Button;