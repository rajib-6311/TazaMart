import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import{ Toaster } from 'react-hot-toast';
import ErrorPage from "./Pages/ErrorPage";
import { useAppContext } from "./Context/AppContext";
import Login from "./Pages/Login";



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
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
           </div>
        </>
    );
};

export default App;