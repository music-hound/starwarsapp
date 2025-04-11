import '../styles/Characters.css';
import CardProp from './CardProp';

function getBgColor( gender ) {
    switch (gender) {
        case 'male':
            return '#73D677';
        case 'female':
            return '#C956FF';
        default:
            return '#F5DB13';
    }
}

const CharacterListItem = ( {character} )=>{
    return (
        <div className={'characterListItem'} style={{wordBreak: 'break-all'}}>
            <h3>{character.name}</h3>

            <div style={{width:'50px',height:'50px', borderRadius:'50%',backgroundColor:`${character.eye_color}`}}></div>

            <div className='characterProps'>
                <CardProp type='height' param={character.height} />
                <CardProp type='mass' param={character.mass} />
            </div>

            <div className='characterTags'>
                {
                character.gender !== 'n/a' && character.gender !== 'none' &&
                <div
                style={{ backgroundColor:`${getBgColor( character.gender )}` }}
                className='characterTagItem' >
                    {character.gender}
                </div>
                }
                {
                character.birth_year !== 'unknown' &&
                <div className='characterTagItem'>
                    {character.birth_year}
                </div>
                }
            </div>
        </div>
    )
}

export default CharacterListItem;