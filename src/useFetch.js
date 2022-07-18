import { useState,useEffect } from "react";

const useFetch = (url)=> {
    const [data, setData]= useState(null);
    //setting  initial value of blogs to be null
    const [isPending, setIsPending] = useState(true);//for loading message
    const [error,setError] = useState(null);//for errors / state has created

    useEffect(()=> {
        const abortCont=new AbortController();

        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                  } 
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);

            })
            .catch(err => { 
                if(err.name === 'AbortError'){
                    console.log('')
                }
                else{
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);

                }
                
            })
        },1000);
        return () => abortCont.abort();
    }, [url]);
    return{ data, isPending,error}
}

export default useFetch;