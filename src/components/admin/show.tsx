import { useState, useEffect } from "react"
import { getAll, deleteProducts } from "../../api/products"
import { IProduct } from "../../models"
import { Link } from "react-router-dom"




import AdminMenu from "./adminMenu"
const Show = () => {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const [products, setProducts] = useState<IProduct[]>([])
    async function fetchProduct() {
        const { data } = await getAll()
        setProducts(data)
    }

    useEffect(() => {
        fetchProduct()
    }, []);
    const removeProduct = (id: string) => {
        console.log(id);
        deleteProducts(id);
    }

    return <div className="flex flex-1">
        <div className=""><AdminMenu /></div>
        <div className="bg-gray-100 w-full pl-7 pt-10">
            <h1 className="ml-5">Điện thoại</h1>
            <p className="ml-20 my-4">Danh mục sản phẩm</p>
            <Link to={`create`} className="ml-20 my-4 border-2 bg-blue-300 px-2 py-1  rounded-md">Thêm sản phẩm</Link>
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
                            <th className="border border-slate-300 w-40">Tên sản phẩm</th>
                            <th className="border border-slate-300 w-32">Giá</th>
                            <th className="border border-slate-300 w-32">Giá sale</th>
                            <th className="border border-slate-300">Mô tả ngắn</th>
                            <th className="border border-slate-300">Mô tả dài</th>
                            <th className="border border-slate-300">Đặc điểm nổi bật</th>
                            <th className="border border-slate-300 w-8">Sửa</th>
                            <th className="border border-slate-300 w-8">Xóa</th>
                        </tr>
                    </thead>
                    {products.map((item, index) => (
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 ">{index + 1}</td>
                                <td className="border border-slate-300">{item.name}</td>
                                <td className="border border-slate-300">{VND.format(item.price)}</td>
                                <td className="border border-slate-300">{VND.format(item.priceSale)}</td>
                                <td className="border border-slate-300">{item.description}</td>
                                <td className="border border-slate-300">{item.longDescription}</td>
                                <td className="border border-slate-300">{item.character}</td>
                                <td className="border border-slate-300"><Link to={`update/${item._id}`} ><img src="../public/thaotac.png" alt="" /></Link></td>
                                <td className="border border-slate-300">
                                    <a href="" >
                                        <button onClick={() => {
                                            if (window.confirm('Bạn có muốn xóa không?')) {
                                                removeProduct(item._id);
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
export default Show;