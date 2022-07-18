import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry,we haven't found your page</h2>
            <img id='image' src="/oops.PNG" alt='page not found'></img>
            <Link to="/">Back to Homepage...</Link>
        </div>
     );
}
 
export default NotFound;