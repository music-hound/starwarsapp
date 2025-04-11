import Button from '../components/Button';
import '../styles/HomePage.css';

const HomePage = ()=>{
    return (
        <div className={'homePagebg'}>
            <div className="homePage">
                <div>
                    <h1>
                        <b>Find</b> all your favorite <b>character</b>
                    </h1>
                    <h2>
                        You can find out all the information about your favorite characters
                    </h2>
                    <Button to={'/characters'}>See more...</Button>
                </div>
                <img style={{width:'720px', transform:'translateX(80px)'}} src={`${import.meta.env.BASE_URL}/yoda_clouds.png`} alt="Yoda_clouds" />
            </div>
        </div>
    )
}

export default HomePage;