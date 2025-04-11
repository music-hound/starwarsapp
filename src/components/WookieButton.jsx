import { useDispatch } from 'react-redux';
import '../styles/WookieButton.css';
import { toggleLanguage } from '../state/languageSlice';

const WookieButton = ()=>{
    const dispatch = useDispatch();
    return (
        <div
        className='wookieButton'
        alt="SwitchButton"
        style={{background:`url(${import.meta.env.BASE_URL}/wookieButton.png) no-repeat center center`}} 
        onClick={() => dispatch(toggleLanguage())}
        />
    )
}

export default WookieButton;