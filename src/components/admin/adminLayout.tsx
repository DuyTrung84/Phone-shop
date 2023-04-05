import { Outlet } from "react-router-dom"
import AdminHeader from "./adminHeader";
import AdminMain from "./show";
import AdminMenu from "./adminMenu";
const AdminLayout = () => {
    return <>

        <AdminHeader />
        <Outlet />

    </>
}
export default AdminLayout;