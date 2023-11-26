import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TelaLogin from '../screens/login/TelaLogin';
import TelaCadastro from '../screens/register/TelaCadastro';
import TelaHome from '../screens/home/TelaHome';
import TelaContract from '../screens/contract/TelaContract';
import TelaReservation from '../screens/reservation/TelaReservation';

function IndexRoutes(){
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<TelaLogin />}/>
                <Route path='/register' element={<TelaCadastro />}/>
                <Route path='/home' element={<TelaHome />}/>
                <Route path='/contract' element={<TelaContract />}/>
                <Route path='/reservation' element={<TelaReservation />}/>
            </Routes>
        </Router> 
    )
}

export default IndexRoutes;