import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import{ Toaster } from 'react-hot-toast';
import ErrorPage from "./Pages/ErrorPage";
import { useAppContext } from "./Context/AppContext";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import AllProducts from "./Pages/AllProducts";
import ProductCategory from "./Pages/ProductCategory";



const App = () => {

    const isSellerPath = useLocation().pathname.includes("seller")
    const {showUserLogin} = useAppContext()
    return (
        <>
            {isSellerPath ? ' ' : <Navbar/>}
            {showUserLogin ? <Login/> : null}
            <Toaster/>
           <div className={`${isSellerPath ? ' ' : 'px-6 md:px-16 lg:px-24 xl:px-32'}`}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<AllProducts/>}/>
                <Route path="/products/:category" element={<ProductCategory/>}/>


                <Route path="*" element={<ErrorPage/>}/>
            </Routes>

            {!isSellerPath && <Footer/> }
           </div>
           
        </>
    );
};

export default App;