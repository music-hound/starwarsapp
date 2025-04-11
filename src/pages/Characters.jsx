import Filter from '../components/Filter';
import '../styles/Characters.css';
import { useGetPeopleQuery } from '../state/swApi';
import CharacterListItem from '../components/CharacterListItem';
import Language from '../components/Language';
import WookieButton from '../components/WookieButton';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addPeople, nextPage } from '../state/peopleSlice';
import { filterChange } from '../state/filterSlice';
import peopleFilter from '../utils/peopleFilter';

const options = [
    { label: "All", value: "" },
    { label: "brown", value: "brown" },
    { label: "red", value: "red" },
    { label: "blue", value: "blue" },
    { label: "white", value: "white" },
  ];

const Characters = ()=>{
    const dispatch = useDispatch();
    const [ filteredPeople, setFilteredPeople ] = useState([]);
    const filterSelect = useSelector((state) => state.reducer.filterReducer.filterSelect);
    const isWookie = useSelector(state => state.reducer.language.isWookie);
    const { people, page } = useSelector(state => state.reducer.people)
    const { data, isFetching, isError } = useGetPeopleQuery(page, isWookie)

    useEffect(() => {
        if (data?.results) {
            dispatch(addPeople(data.results))
        }
    }, [data, dispatch])

    useEffect(() => {
        const handleScroll = () => {
            const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50
            if ( nearBottom && !isFetching ) {
            dispatch(nextPage())
            }
            }
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }, [isFetching, dispatch])

    useEffect(() => {
        setFilteredPeople(peopleFilter(people, filterSelect));
    }
    , [filterSelect, people]);

    useEffect(() => {
        if (!isFetching && filteredPeople.length < 10) {
            dispatch(nextPage())
        }
    }, [isFetching, filteredPeople, dispatch])
    
    return (
        <div className={'charactersContainer'}>

            <Language />
            <WookieButton />            

            <h1 className={'characterTitle'}>
                {filteredPeople.length} People for you to choose your favorite
            </h1>

            <div style={{ display: 'flex', gap:'20px', alignItems: 'center', alignSelf:'flex-start' }}>
                <span>color eye</span>
                <Filter
                options={options}
                value={filterSelect}
                onChange={ (value)=>{dispatch(filterChange(value))} }
                />
            </div>

            <div className={'characterList'}>
                {
                    filteredPeople.map(
                        (item) => (
                            <CharacterListItem key={item.url} character={item} />
                    ))
                }
            </div>

            { isFetching && <div>Loading...</div> }
            { isError && <div>Error: {isError.error}</div> }

            
        </div>
    )
}

export default Characters;