
import Dashboard from "../Dashboard/Dashboard";
import ProductList from "../Productlist/ProductList";

import Statistic from "../Statistic/Statistic";


const Home = () => {
    return (
        <div>
            <ProductList></ProductList>
            <Statistic></Statistic>
            <Dashboard></Dashboard>
        </div>
    );
};

export default Home;