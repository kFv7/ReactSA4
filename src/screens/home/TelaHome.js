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

                <input className='input' placeholder='Buscar' ></input>



                <button>Adicionar Coisas</button>

            </header>


            <main>

                <p>Aqui vai o conteúdo ou componente para armazenar informações.</p>
            </main>


            <footer>
                <p>Informações do site</p>
            </footer>
        </container>
    )
}

export default TelaHome;