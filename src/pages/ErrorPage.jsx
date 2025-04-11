import { Link } from "react-router-dom";
import '../styles/ErrorPage.css';

const ErrorPage = ()=>{
    return (
        <div className="errorPage">

            <h1 className="errorTitle">
                404
            </h1>
            <img className="deathStar" src={`${import.meta.env.BASE_URL}/death_star.png`} alt="deathstar" />
            <button>
                <Link to={'/'} >Return</Link>
            </button>

        </div>
    )
}

export default ErrorPage;