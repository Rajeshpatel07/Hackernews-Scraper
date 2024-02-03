import { useState } from "react"
import DashNav from "./DashNav";
import axios from 'axios';

function Dashboard(){

    const cookie=document.cookie.split("=")
    const token=cookie[1];
    console.log(token)

    const verify=async ()=>{
        try{
            const res=await axios.post('http://localhost:8000/dashboard',{
                jwt:token
            })
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <div>
            <DashNav/>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="mainimg.jpg" alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">An alternative cause for the Great Stagnation: the cargo cult company</h2>
                    <p>Upvote : 108</p>
                    <p>By : galenmarchetti</p>
                    <div className="card-actions justify-end">
                    <a href="https://www.shyamsankar.com/p/technology-is-the-problem" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dashboard;