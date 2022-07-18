import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog,error,isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+ blog.id, {//Deleting blog with particular id
            method:'DELETE'
        }).then(()=>{
            history.push('/');//after deleting,it'll go back to home page
        })
    }

    return ( 
        <div className="blog-details">
            {isPending&& <div>Loading....</div>}{/*conditional templating*/}
            {error && <div>{error}</div>}
            {blog &&(   
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author }</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;