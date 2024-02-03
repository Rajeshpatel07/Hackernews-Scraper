import { useState } from "react"
import DashNav from "./DashNav";

function Dashboard(){

    return(
        <div>
            <DashNav/>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
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