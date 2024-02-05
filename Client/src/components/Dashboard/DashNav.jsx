import { Link } from "react-router-dom";

function DashNav(){
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link to="/" className=" btn-ghost text-xl"><img src="logo1.png" alt="logo" className="w-40 h-6/6" /></Link>
        </div>
        <div className="flex-none gap-4 mr-20">
            <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full overflow-hidden">
                <img 
                alt="Avatar" src="Avatar.png" />
                </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                <a className="justify-between">
                    Profile
                </a>
                </li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
        </div>
    )
}

export default DashNav;