
import AdminMenu from "./adminMenu"
const Create = () => {
    return <div className="flex flex-1">
        <div className=""><AdminMenu /></div>
        <div className="bg-gray-100 w-full pl-7 pt-10">
            <h1 className="ml-5">Thêm sản phẩm</h1>
            <div className="grid grid-cols-2 bg-white h-full gap-4">
                <div>
                    <input type="file" name="" id="" /><hr />
                    <p>Mô tả ngắn:</p>
                    <textarea name="" id="" className="border-2 border-gray-400 w-full rounded h-auto " ></textarea>
                </div>
                <div>
                    <h2>Thông tin sản phẩm</h2><hr />
                    <form action="" className="">
                        <p>Tên sản phẩm</p>
                        <input type="text" className="border-2 border-gray-400 w-full rounded h-auto py-1" />
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <p>Giá gốc</p>
                                <input type="text" className="border-2 border-gray-400 w-full rounded h-auto py-1" />
                            </div>
                            <div>
                                <p>Giá khuyến mãi</p>
                                <input type="text" className="border-2 border-gray-400 w-full rounded h-auto py-1" />
                            </div>
                        </div>
                        <span>Danh mục:   </span><select name="" id="" className="border-2 border-gray-400 w-full rounded h-auto py-1">
                            <option value="" >Laptop</option>
                        </select>
                        <p>Đặc điểm nổi bật:</p>
                        <textarea name="" id="" className="border-2 border-gray-400 w-full rounded h-40 " ></textarea>
                        <p>Mô tả dài:</p>
                        <textarea name="" id="" className="border-2 border-gray-400 w-full rounded h-40 " ></textarea>

                        <button className="bg-blue-500 px-2.5 py-1.5 rounded-md hover:bg-sky-700">Thêm mới</button>
                    </form>
                </div>
            </div>
        </div>
    </div >
}
export default Create