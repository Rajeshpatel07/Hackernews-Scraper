
import { Link } from "react-router-dom"

function Content(){

    return (
        <div>
            <img className="opacity-40 z-0 absolute top-0 left-0 bg-gradient-to-t" src="mainimg.jpg" alt="PageImg" />
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse mb-40">
                <div>
                <h1 className="text-5xl font-bold">Want The Latest News!</h1>
                <p className="py-6">Get the most trending tech news with Tech Pulse</p>
                <Link to='/register' className="btn btn-primary">Get Started</Link>
                </div>
            </div>
            </div>
        </div>
    )

}

export default Content;