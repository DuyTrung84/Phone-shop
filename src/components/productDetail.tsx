import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getById } from "../api/products"
import { IProduct } from "../models"



const ProductDetail = () => {
    const [products, setProducts] = useState<IProduct>({} as IProduct)
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const { id } = useParams()
    async function fetchProduct() {
        if (id) {
            const { data } = await getById(id);
            console.log(data);
            setProducts(data.data)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    return <div>
        <Link to="" className="block">

            <div className="drop-shadow-lg bg-white flex items-center  my-5">
                <ul className="flex container mx-auto">
                    <li>Trang chủ</li>
                    <li className="mx-5">Samsung</li>
                    <li>{products.name}</li>
                </ul>
            </div>

            <div className="container mx-auto">
                <h1 className="text-2xl">{products.name}</h1>
            </div>
            <hr className="my-8" />
            <div className="flex gap-16 container mx-auto">
                <div className="pl-10">
                    <img src="../public/img-detail1.png" alt="" className="w-96" />
                    <div className=" flex items-center gap-4 mt-3">
                        {/* <img src="./img-detail1.png" alt="" className="w-16 h-16" /> */}
                        <img src="../public/img-detail1.png" alt="" className="w-14 h-14" />
                        <img src="../public/img-detail1.png" alt="" className="w-14 h-14" />
                        <img src="../public/img-detail1.png" alt="" className="w-14 h-14" />
                        <img src="../public/img-detail1.png" alt="" className="w-14 h-14" />
                    </div>
                </div>
                <div >
                    <p className="text-gray-500 text-md"><span className="text-red-500 text-2xl mr-3">{VND.format(products.price)}
                    </span>{VND.format(products.priceSale)}</p>
                    <p className="w-4/5" > Mô tả ngắn: {products.description}</p>
                    <div className="mt-52 flex items-center">
                        <button className="bg-red-500 w-1/4 h-12 rounded-md  text-white">Mua ngay</button>
                        <button className=" border-2 border-red-500 w-12 h-12 rounded-md ml-10"><img src="../public/icon.png" alt="cart" className="ml-2 w-6 h-6" /></button>
                        <span className="w-20 ml-3">Thêm vào giỏ hàng</span>
                    </div>
                </div>
            </div>
            <div className="container mx-auto bg-gray-100 mt-14">
                <h2 className="text-red-500 text-center text-xl mb-2">ĐẶC ĐIỂM NỔI BẬT</h2>
                <div className="ml-8" dangerouslySetInnerHTML={{ __html: products.character }}>
                    {/* <p>Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</p>
                    <p className="my-3">Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz mượt mà</p>
                    <p className="mb-3">Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến 8 GB</p>
                    <p>Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ trợ sạc nhanh 25 W</p> */}
                </div>
            </div>
            <div className="container mx-auto mt-6">
                <div dangerouslySetInnerHTML={{ __html: products.longDescription }}>
                    {/* <p className=" text-lg">Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!</p>
                    <h2 className="text-2xl mb-4 mt-9">Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h2>
                    <p>Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc</p>
                    <h3 className="text-xl mb-4 mt-8">Thiết kế sang trọng, màn hình Super AMOLED</h3>
                    <p>Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
                    <p className="mb-4">Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào.</p>
                    <p>Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di chuyển dễ dàng.</p> */}
                </div>

                <div className="pl-96 mt-10 mb-32">
                    <button className="border-2 border-stone-500 w-1/4 h-10 ml-44 rounded-lg  text-black">Xem thêm</button>
                </div>
            </div>
        </Link>
    </div>

}

export default ProductDetail