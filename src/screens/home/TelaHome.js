import AlignmentExample from '../../components/Navbar/NavbarDown';
import NavScrollExample from '../../components/Navbar/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TelaHome(){
    return (
        <container>
            <header>
                <NavScrollExample/>
            </header>

            <middle>
                
            </middle>

            <footer>
                <AlignmentExample/>
            </footer>

        </container>
    )
}

export default TelaHome;