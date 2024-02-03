import {useState,useEffect} from 'react'
import {Axios} from 'axios'




const NewsApi=()=>{
    const [news,setnews]=useState({});
    useEffect(()=>{
        Axios.post(``)
        .then((res)=>setlog_response(res.data))
        .catch((err)=>console.log(err))
    },[])
    return news;
}
