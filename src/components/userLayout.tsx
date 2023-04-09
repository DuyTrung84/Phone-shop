import { Outlet } from "react-router-dom"
import UserHeader from "./userHeader"
import UserFooter from "./userFooter";
// import Silder from "./silder";
const UserLayout = () => {
    return <>

        <UserHeader />
        {/* <Silder /> */}
        <Outlet />
        <UserFooter />
    </>
}
export default UserLayout;