import { useSelector } from 'react-redux';
import '../styles/Characters.css';

const Language = ()=>{
    const language = useSelector(state => state.reducer.language.isWookie);
    return (
        <div
        style={{
            marginTop: '30px',
            width: '100%',
            textAlign: 'right',
        }}
        >language : {language ? 'woo' : 'en'}</div>
    )
}

export default Language;