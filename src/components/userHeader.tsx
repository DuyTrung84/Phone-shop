import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { IUser } from "../models";

const UserHeader = () => {

    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState<IUser | null>(() => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    });
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setLoggedIn(null);

        navigate("/signin")
    }
    return <header className="bg-red-500">
        <div className="container mx-auto flex gap-48 items-center py-2">
            <img className="w-[50px]" src="../public/logo.png" alt="" />
            <input className="w-1/2 rounded-md py-1.5 ml-16 " type="text" placeholder="Search" />

            {loggedIn ? (
                <div>
                    <b className="">Xin chào: {loggedIn?.firstName + " " + loggedIn?.lastName}</b>
                    <button onClick={handleLogout} className="bg-blue-500 py-1 px-1 "> Logout</button>
                </div>
            ) : (
                <div className="text-white">
                    <Link to={`/signin`} className="mx-10  hover:text-blue-300">SignIn</Link>
                    <Link to={`/signup`} className=" hover:text-blue-300">SignUp</Link>
                </div>
            )
            }

        </div>
    </header >
}

export default UserHeader