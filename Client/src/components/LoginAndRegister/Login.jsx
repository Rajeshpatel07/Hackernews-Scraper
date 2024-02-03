import { useState,startTransition } from "react"
import { Link } from "react-router-dom"

function Login(){

    // const [isTransitioning, startTransition] = useTransition();

    return(
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse pl-10">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold"> Login Now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <Link to="/register" className="label-text-alt link link-hover"> Haven't Register ? Click here</Link>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    )

}

export default Login;