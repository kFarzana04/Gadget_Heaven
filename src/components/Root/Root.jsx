import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;