import { useEffect } from 'react';
import '../styles/Popup.css';
import { useSelector } from 'react-redux';
import { useGetPersonByIdQuery } from '../state/swApi';
import CardProp from './CardProp';
import { getBgColor } from './CharacterListItem';

const Popup = ({ isOpen, onClose }) => {

    const currentCharacterId = useSelector((state) => state.reducer.characterReducer.characterId);

    const { data, isFetching, isError } = useGetPersonByIdQuery(currentCharacterId)

    useEffect(() => {
      const handleEsc = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      if (isOpen) {
        document.addEventListener('keydown', handleEsc);
      }
      return () => document.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);
  
    if (!isOpen) return;
  
    return (
      <div className="popupOverlay" onClick={onClose}>
        <div className="popupContent" onClick={(e) => e.stopPropagation()}>
          <button className="popupClose" onClick={onClose}>×</button>

          <div className='detailsContainer'>

          <div className='detailsImage' style={{background:`url(${import.meta.env.BASE_URL}/ufo.png) no-repeat center center`}} >
          {
                data.gender !== 'n/a' && data.gender !== 'none' &&
                <div
                style={{ backgroundColor:`${getBgColor( data.gender )}` }}
                className='characterTagItem' >
                    {data.gender}
                </div>
                }
                {
                data.birth_year !== 'unknown' &&
                <div className='characterTagItem'>
                    {data.birth_year}
                </div>
                }
          </div>

          <div className="detailInfo">
            <div className='detailsName'>
              {data.name}
            </div>

            <div className='detailsParam'>
              <div className='detailsParamValue'>Hair color:{data.hair_color}</div>
              <div className='detailsParamValue'>Skin color:{data.skin_color}</div>
              <div className='detailsParamValue'>Eye Color:{data.eye_color}</div>
            </div>

            <div className='detailsParamContainer'>
              <div className='detailsParam popupDetail'>
                <CardProp type='height' param={data.height} />
              </div>

              <div className='detailsParam popupDetail'>
                <CardProp type='mass' param={data.mass} />
              </div>
            </div>
          </div>
</div>
            

          { isFetching && <div>Loading...</div> }
          { isError && <div>Error: {isError.error}</div> }

        </div>
      </div>
    );
  };
  
  export default Popup;