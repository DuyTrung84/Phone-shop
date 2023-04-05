const AdminHeader = () => {
    return <header className="bg-blue-500 py-2 ">
        <div className="container mx-auto flex gap-4 items-center text-white">
            <img className="w-[50px]" src="../public/logo.png" alt="" />
            <p className=" mr-7">Dashboard</p>
            <input className=" w-1/2 rounded-md py-1.5" type="text" placeholder="Search" />
            <b className="ml-36">Xin chào Nguyễn Duy Trung</b>
        </div>
    </header>
}
export default AdminHeader