
import AdminMenu from "./adminMenu"
const Show = () => {
    return <div className="flex flex-1">
        <div className=""><AdminMenu /></div>
        <div className="bg-gray-100 w-full pl-7 pt-10">
            <h1 className="ml-5">Điện thoại</h1>
            <p className="ml-20 my-4">Danh mục sản phẩm</p>
            <div className="mb-4">

                <form action="">
                    <b>Bộ lọc:</b>
                    <select name="" id="" className="w-44 border-gray-950 ml-2">
                        <option value="">Iphone</option>
                    </select>
                </form>

            </div>

            <div className="bg-white h-full">
                <table className="table-auto border-x-black text-center w-full ">
                    <thead>
                        <tr>
                            <th className="border border-slate-300">#</th>
                            <th className="border border-slate-300">Tên sản phẩm</th>
                            <th className="border border-slate-300">Thành tiền</th>
                            <th className="border border-slate-300">Mô tả</th>
                            <th className="border border-slate-300">Ẩn/hiện</th>
                            <th className="border border-slate-300">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-300">1</td>
                            <td className="border border-slate-300">Iphone</td>
                            <td className="border border-slate-300">10.000.000</td>
                            <td className="border border-slate-300">Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, </td>
                            <td className="border border-slate-300"></td>
                            <td className="border border-slate-300"><a href="" ><img src="../public/thaotac.png" alt="" /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="border border-slate-300">2</td>
                            <td className="border border-slate-300">Iphone</td>
                            <td className="border border-slate-300">10.000.000</td>
                            <td className="border border-slate-300">Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, </td>
                            <td className="border border-slate-300"></td>
                            <td className="border border-slate-300"><a href="" ><img src="../public/thaotac.png" alt="" /></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div >
}
export default Show