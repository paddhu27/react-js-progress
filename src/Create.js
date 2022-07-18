import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const[title,setTitle] = useState('');//creating states
    const[body,setBody] = useState('');
    const[author,setAuthor] = useState('Paddu');
    const[isPending,setisPending] = useState(false);
    const history=useHistory();
//for submit event
    const handleSubmit =(e)=> {
        e.preventDefault();
        const blog={title,body,author}//id will be automatically added

        setisPending(true)

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added')
            setisPending(false)
            //history.go(-1);
            history.push('/');
        })
        
    }
    return (  
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text"
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}/>
                <label>Blog body:</label>
                <textarea required
                 value={body}
                 onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value='Paddu'>Paddu</option>
                    <option value='Surya'>Surya</option>
                    <option value='Mahi'>Mahi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog.......</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        
        </div>
    );
}
 
export default Create;