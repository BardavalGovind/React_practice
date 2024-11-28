import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

function Routing(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;

