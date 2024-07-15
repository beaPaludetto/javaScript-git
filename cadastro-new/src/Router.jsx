import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import CadNew from './pages/CadNews';
import HeaderPrincipal from "./components/HeaderPrincipal";
import Sobre from "./pages/Sobre";


const Router = () => {
    return(
        <BrowserRouter>
        <HeaderPrincipal />
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path= '/Sobre' element={<Sobre/>}/>
           <Route path='/Cadastro' element={<CadNew />}/>
            

        </Routes>
        </BrowserRouter>
    )
}

export default Router