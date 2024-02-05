import { useState} from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register(){

    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    
    const navigate=useNavigate();

    const Registry=async(e)=>{
        e.preventDefault()
        try{
            const res=await axios.post('http://localhost:8000/register',{
                email:email,
                password:password
            })
            
            // console.log(res);  --> logs the response

            if(res.data["message"]==='Registered Successfully'){
                navigate('/login')
            }
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse pl-10">
        <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register Now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input
            type="email" placeholder="email" className="input input-bordered" required 
            value={email}
            onChange={(e)=> setemail(e.target.value)}
            />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input 
            type="password" placeholder="password" className="input input-bordered" required 
            value={password}
            onChange={(e)=> setpassword(e.target.value)}
            />
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forget Password?</a>
            </label>
            </div>
            <div className="form-control mt-6">
            <button 
            className="btn btn-primary"
            onClick={Registry}
            >Register</button>
            </div>
        </form>
        </div>
    </div>
    </div>
    )

}

export default Register;