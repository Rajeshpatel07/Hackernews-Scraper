import { useEffect, useState } from "react"
import DashNav from "./DashNav";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {getStory,getStoryIds} from '../../hooks/NewsApi'

function Dashboard(){

    const [StoryIds,setStoryIds]=useState([]);
    const [Story,setStory]=useState([])

    const navigate=useNavigate()
    axios.defaults.withCredentials = true;

    const verify=async (token)=>{
        try{
            const res=await axios.get('http://localhost:8000/dashboard')
            console.log(res)
            if(res.data.message==="Go to Home"){
                navigate('/')
            }
        }
        catch(err){
            console.log(err)
        }
    }

    async function hold(){
        await new Promise(resolve => setTimeout(resolve, 10000));
    }

    useEffect(()=>{
        verify()
    },[])

    
    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, []);
    
    useEffect(() => {
            getStory(StoryIds).then(data =>setStory(data));
    }, [StoryIds,Story,setStory]);

    console.log(StoryIds)
    console.log(Story)

    return(
        <div>
            <DashNav/>
            {Story.map((id)=>(
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="mainimg.jpg" alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{id.title}</h2>
                    <p>Upvote : {id.score}</p>
                    <p>By : {id.by}</p>
                    <div className="card-actions justify-end">
                    <a href={id.url} className="btn btn-primary">Read More</a>
                    </div>
                </div>
        </div>
        ))}


        </div>
    )

}

export default Dashboard;