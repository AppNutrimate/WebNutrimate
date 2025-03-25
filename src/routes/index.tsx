import { Route, Routes } from "react-router-dom";
import Soon from "../pages/Soon";
import Home from "../pages/Home";

export default function StackRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Soon />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}