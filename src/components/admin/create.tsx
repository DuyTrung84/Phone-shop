import { useForm } from 'react-hook-form';
import AdminMenu from "./adminMenu"
import { yupResolver } from '@hookform/resolvers/yup';
import { addProducts } from '../../api/products';
import { useNavigate } from 'react-router-dom'
import { createForm, createSchema } from '../../models';



const Create = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<createForm>({
        resolver: yupResolver(createSchema)
    })
    const navigate = useNavigate()
    const onSubmit = async (data: createForm) => {
        console.log(data);

        try {
            const response = await addProducts(data)
            console.log(response)
            alert('Thêm sản phẩm thành công')
            navigate('/admin')
        } catch (error) {
            alert("Thêm không thành công. Lỗi" + error)
        }
    }

    return <form className="flex flex-1" onSubmit={handleSubmit(onSubmit)}>
        <div className=""><AdminMenu /></div>
        <div className="bg-gray-100 w-full pl-7 pt-10">
            <h1 className="ml-5">Thêm sản phẩm</h1>
            <div className="grid grid-cols-2 bg-white h-full gap-4 " >
                <div>
                    <input type="file" name="" id="" /><hr />
                    <p>Mô tả ngắn:</p>
                    <textarea
                        className="border-2 border-gray-400 w-full rounded h-auto "
                        {...register("description")}
                    ></textarea>
                    <p className='text-red-600 text-[15px]'>{errors.description && errors.description.message}</p>
                </div>
                <div>
                    <h2>Thông tin sản phẩm</h2><hr />
                    <div className="" >
                        <p>Tên sản phẩm</p>
                        <input
                            type="text"
                            className="border-2 border-gray-400 w-full rounded h-auto py-1"
                            {...register("name")}
                        />
                        <p className='text-red-600 text-[15px]'>{errors.name && errors.name.message}</p>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <p>Giá gốc</p>
                                <input
                                    type="number"
                                    className="border-2 border-gray-400 w-full rounded h-auto py-1"
                                    {...register("price")}
                                />
                                <p className='text-red-600 text-[15px]'>{errors.price && errors.price.message}</p>
                            </div>
                            <div>
                                <p>Giá khuyến mãi</p>
                                <input
                                    type="number"
                                    className="border-2 border-gray-400 w-full rounded h-auto py-1"
                                    {...register("priceSale")}
                                />
                                <p className='text-red-600 text-[15px]'>{errors.priceSale && errors.priceSale.message}</p>
                            </div>
                        </div>
                        {/* <span>Danh mục:   </span><select name="" id="" className="border-2 border-gray-400 w-full rounded h-auto py-1">
                            <option value="" >Laptop</option>
                        </select> */}
                        <p>Đặc điểm nổi bật:</p>
                        <textarea
                            className="border-2 border-gray-400 w-full rounded h-40 "
                            {...register("character")}
                        ></textarea>
                        <p className='text-red-600 text-[15px]'>{errors.character && errors.character.message}</p>
                        <p>Mô tả dài:</p>
                        <textarea
                            className="border-2 border-gray-400 w-full rounded h-40 "
                            {...register("longDescription")}
                        ></textarea>
                        <p className='text-red-600 text-[15px]'>{errors.longDescription && errors.longDescription.message}</p>
                        <button className="bg-blue-500 px-2.5 py-1.5 rounded-md hover:bg-sky-700">Thêm mới</button>
                    </div>
                </div>
            </div>
        </div>
    </form >
}
export default Create