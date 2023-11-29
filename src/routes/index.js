import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TelaLogin from '../screens/login/TelaLogin';
import TelaCadastro from '../screens/register/TelaCadastro';
import TelaHome from '../screens/home/TelaHome';
import TelaReservation from '../screens/reservation/TelaReservation';
import AnnouncementAp from '../screens/announcementAp/AnnouncementAp';

function IndexRoutes(){
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<TelaLogin />}/>
                <Route path='/register' element={<TelaCadastro />}/>
                <Route exact path='/home' element={<TelaHome />}/>
                <Route path='/reservation' element={<TelaReservation />}/>
                <Route path='/announcementAp' element={<AnnouncementAp />}/>
            </Routes>
        </Router> 
    )
}

export default IndexRoutes;