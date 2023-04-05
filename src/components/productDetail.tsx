import { Outlet } from "react-router-dom"
import UserHeader from "./userHeader"
import UserFooter from "./userFooter";
import MainProduct from "./mainProductDetail";
const ProductDetail = () => {
    return <>
        <MainProduct />
        <Outlet />
    </>
}
export default ProductDetail;