const UserHeader = () => {
    return <header className="bg-red-500">
        <div className="container mx-auto flex gap-48 items-center ">
            <img className="w-[50px]" src="logo.png" alt="" />
            <input className="w-1/2 rounded-md py-1.5 ml-16 " type="text" placeholder="Search" />
            <div className="text-white">
                <a href="" className="mx-10  hover:text-blue-300">SignIn</a>
                <a href="" className=" hover:text-blue-300">SignUp</a>
            </div>
        </div>
    </header>
}

export default UserHeader