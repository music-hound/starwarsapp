import '../styles/Characters.css';

const CardProp = ( { type, param } )=>{
    if (param === 'unknown') { return }
    if (param.includes(',')) { param = param.replace(',', '.') }
    return (
        <div>
            <div className='circleCard'>
                <span>{ Number(param).toFixed() }</span>
            </div>
            <span>{type}</span>
        </div>
    )
}

export default CardProp;