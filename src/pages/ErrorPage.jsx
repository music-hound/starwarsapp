
import { Link } from "react-router-dom";

const ErrorPage = ()=>{
    return (
        <div className={'pagePadding'}>
            <h1
            sx={{
                fontSize:'50px',
            }}>
                404
            </h1>
            
            <button>
                <Link to={'/'} />
            </button>

        </div>
    )
}

export default ErrorPage;