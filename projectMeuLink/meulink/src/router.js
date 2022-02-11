import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Links from  './pages/Links';
import Error from './pages/Error';

// configurando as rotas
function RoutersApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/links" element={<Links/>} />

                {/* criando a rota notfound */}
                <Route path="*" element={<Error/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default RoutersApp;