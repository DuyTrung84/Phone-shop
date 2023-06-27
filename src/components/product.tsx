import { Link } from "react-router-dom";
import { IProduct } from "../models";

type Props = {
    data: IProduct
}

const Product = ({ data }: Props) => {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return <Link to={`detail/${data._id}`} className="block mb-5" >
        <img alt="Art" src="sp1.png" className="" />

        <p className="text-xs">{data.name}</p>
        <p>
            <span className="text-sm">{VND.format(data.price)}</span>
            <del className="text-xs ml-2">{VND.format(data.priceSale)}</del>
        </p>
        <p className="flex">
            <img src="sao.png" alt="" className="w-2.5 h-2.5" />
            <img src="sao.png" alt="" className="w-2 h-2.5" />
            <img src="sao.png" alt="" className="w-2.5 h-2.5" />
            <img src="sao.png" alt="" className="w-2.5 h-2.5" />
            <img src="sao.png" alt="" className="w-2.5 h-2.5" />
            <span className="text-xs ml-1">35 Đánh giá</span>
        </p>


    </Link>
}

export default Product;