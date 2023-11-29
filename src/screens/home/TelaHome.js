import NavbarDown from '../../components/Navbar/NavbarDown';
import NavbarHeader from '../../components/Navbar/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TelaHome(){
    return (
        <container>
            <header>
                <NavbarHeader/>
            </header>

            <middle>

            </middle>

            <footer>
                <NavbarDown/>
            </footer>

        </container>
    )
}

export default TelaHome;