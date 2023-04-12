import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Flavors from "../Pages/Flavors";


function RoutesPage(){
    return(
        <BrowserRouter> 
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/flavors" element={<Flavors />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesPage;