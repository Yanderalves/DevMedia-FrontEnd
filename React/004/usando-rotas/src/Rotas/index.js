import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicial from '../componentes/Paginas/PaginaInicial';
import PaginaFrontEnd from '../componentes/Paginas/PaginaFrontEnd';
import PaginaBackEnd from '../componentes/Paginas/PaginaBackEnd';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <PaginaInicial/> } />
            <Route path='/front-end' element={ <PaginaFrontEnd/> } />
            <Route path='/back-end' element={ <PaginaBackEnd/> } />
        </Routes>
    </BrowserRouter>
);

export default Rotas;