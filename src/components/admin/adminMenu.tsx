import { Link } from "react-router-dom"

const AdminMenu = () => {
    return <div className="flex h-screen flex-col justify-between border-r bg-white">
        <div className="pr-16 ml-10 py-6">
            <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1 ">
                <Link to={`/admin`} className="flex items-center gap-2 rounded-lg bg-blue-300 px-4 py-2 text-gray-700 w-52">
                    <img src="../public/a_dienthoai.png" alt="" />
                    <span className="text-sm font-medium "> List sản phẩm </span>
                </Link>

                <a href="#" className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-blue-300 hover:text-gray-700">
                    <img src="../public/a_laptop.png" alt="" />
                    <span className="text-sm font-medium"> Laptop </span>
                </a>

                <a href="#" className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-blue-300 hover:text-gray-700">
                    <img src="../public/a_tablet.png" alt="" />
                    <span className="text-sm font-medium"> Máy tính bảng </span>
                </a>
                <Link to={`user`} className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-blue-300 hover:text-gray-700">
                    <img src="../public/a_amthanh.png" alt="" />
                    <span className="text-sm font-medium"> User</span>
                </Link>
            </nav>
        </div>
    </div>

}
export default AdminMenu