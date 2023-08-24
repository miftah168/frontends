import React ,{ useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Container from './Container';
import Blog from '../Menu/Blog';
import Health from '../Menu/Health';
import Science from '../Menu/Science';
import Technology from '../Menu/Technology';
import Detail from '../Menu/Detail';
import Views from '../Menu/Views';


export default function Header({author,type}){
    return (
        <Router>
        <>
   
<nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
    <Link to="/" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
        <h2 className="m-0 text-primary">HIGHLIGHS</h2>
    </Link>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">

        <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link">SPORTS</Link>
            <Link to="/blog" className="nav-item nav-link">GENERAL</Link>
            <Link to="/health" className="nav-item nav-link">HEALTH</Link>
            <Link to="/science" className="nav-item nav-link">SCIENCE</Link>
            <Link to="/technology" className="nav-item nav-link">TECHNOLOGY</Link>
        </div>
    </div>
</nav>

</>



<Routes>
<Route path="/" element={<Container/>} />
<Route path="/blog" element={<Blog/>} />
<Route path="/health" element={<Health/>} />
<Route path="/science" element={<Science/>} />
<Route path="/technology" element={<Technology/>}/>
<Route path="/itemDetail/:productCode" exact element={<Detail />} />
<Route path="/viewsDetail/:articleCode" exact element={<Views />} />
</Routes>
</Router>
       
) ;

}