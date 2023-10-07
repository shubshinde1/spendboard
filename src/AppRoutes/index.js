import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from '../Tabs/Dashboard/Dashboard.js';
import Home from "../Tabs/Home/Home.js";
import Explore from "../Tabs/Explore/Explore.js";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/Dashboard" element={<Dashboard />}></Route>
                <Route path="/Explore" element={<Explore />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;