import { useState, useEffect } from "react"
import { IProduct, IUser } from "../../models"
import { Link } from "react-router-dom"
import AdminMenu from "./adminMenu"
import { deleteUser, getAllUser } from "../../api/auth"


const AdminUser = () => {
    const [users, setUsers] = useState<IUser[]>([])
    async function fetchProduct() {
        const { data } = await getAllUser()
        console.log(data.user);

        setUsers(data.user)
    }

    useEffect(() => {
        fetchProduct()
    }, []);
    const removeProduct = (id: string) => {
        console.log(id);
        deleteUser(id);
    }

    return <div className="flex flex-1">
        <div className=""><AdminMenu /></div>
        <div className="bg-gray-100 w-full pl-7 pt-10">
            <p className="ml-20 my-4">Thông tin tài khoản</p>
            <div className="mb-4">

                <form action="">
                    <b>Bộ lọc:</b>
                    <select name="" id="" className="w-44 border-gray-950 ml-2 my-2
                    ">
                        <option value="">Iphone</option>
                    </select>
                </form>

            </div>

            <div className="bg-white h-full">
                <table className="table-auto border-x-black text-center w-full ">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 w-10">STT</th>
                            <th className="border border-slate-300 w-40">Họ</th>
                            <th className="border border-slate-300 w-32">Tên</th>
                            <th className="border border-slate-300 w-32">Email</th>
                            <th className="border border-slate-300">Mật khẩu</th>
                            <th className="border border-slate-300 w-8">Xóa</th>
                        </tr>
                    </thead>
                    {users.map((user, index) => (
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 ">{index + 1}</td>
                                <td className="border border-slate-300">{user.firstName}</td>
                                <td className="border border-slate-300">{user.lastName}</td>
                                <td className="border border-slate-300">{user.email}</td>
                                <td className="border border-slate-300">{user.password}</td>
                                <td className="border border-slate-300">
                                    <a href="" >
                                        <button onClick={() => {
                                            if (window.confirm('Bạn có muốn xóa không?')) {
                                                deleteUser(user._id);
                                            }
                                        }}>
                                            <img src="../public/thaotac.png" alt="" />
                                        </button>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    </div >

}
export default AdminUser;