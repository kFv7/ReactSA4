import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TelaLogin from '../screens/login/TelaLogin';
import TelaCadastro from '../screens/register/TelaCadastro';
import TelaHome from '../screens/home/TelaHome';

function IndexRoutes(){
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<TelaLogin />}/>
                <Route path='/register' element={<TelaCadastro />}/>
                <Route path='/home' element={<TelaHome />}/>
            </Routes>
        </Router> 
    )
}

export default IndexRoutes;