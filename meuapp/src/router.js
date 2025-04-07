import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/index.js";
import Home from './pages/home/Home.js'
import Sobre from './pages/sobre/index.js'
import Contato from './pages/Contato/index.js'

function RouterApp(){
    return(
        <BrowserRouter>
        <Header/>

            <Routes>

                <Route  path='/' element = { <Home/>}/>

                <Route path="/sobre" element = {<Sobre/>}  />
                <Route path='/Contato' element = {<Contato/>} />

                
            </Routes>

        </BrowserRouter>
    )
}
export default RouterApp; 