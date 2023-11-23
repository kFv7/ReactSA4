import './TelaHomeStyle.css';
import React from 'react';
import { Link } from "react-router-dom";

function TelaHome(){
    return (
        <container>

            <header>
                <Link to="/home">
                <img src='images/a.png'></img>
                </Link>

                <input className='input-home' placeholder='Buscar' ></input>



                <button>Adicionar Coisas</button>

            </header>


            <middle>

                <p>Aqui vai o conteúdo ou componente para armazenar informações.</p>
            </middle>


            <footer>
                <p>Informações do site</p>
            </footer>
        </container>
    )
}

export default TelaHome;