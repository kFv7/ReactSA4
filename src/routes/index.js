import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TelaLogin from '../screens/login/TelaLogin';
import TelaCadastro from '../screens/register/TelaCadastro';
import TelaHome from '../screens/home/TelaHome';
import TelaLocation from '../screens/location/TelaLocation';
import TelaReservation from '../screens/reservation/TelaReservation';

function IndexRoutes(){
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<TelaLogin />}/>
                <Route path='/register' element={<TelaCadastro />}/>
                <Route path='/home' element={<TelaHome />}/>
                <Route path='/location' element={<TelaLocation />}/>
                <Route path='/reservation' element={<TelaReservation />}/>
            </Routes>
        </Router> 
    )
}

export default IndexRoutes;