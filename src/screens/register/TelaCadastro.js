import { Link } from "react-router-dom";
import { useState } from 'react';
import '../../components/Input/InputGlobal.css'
import '../../components/Button/ButtonGlobal.css'
import '../../components/Layout/LayoutForm.css'
import '../../components/Layout/LayoutContainer.js'
import LayoutContainer from "../../components/Layout/LayoutContainer.js";

function TelaCadastro(){
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <LayoutContainer>
          <div className="wrap-a">
            <form className="a-form">

              <div className="wrap-input">
                <input
                  className={name !== "" ? "has-val input" : "input"}
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="focus-input" data-placeholder="Name"></div>
              </div>

              <div className="wrap-input">
                <input
                  className={email !== "" ? "has-val input" : "input"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="focus-input" data-placeholder="Email"></div>
              </div>

              <div className="wrap-input">
                <input
                  className={cpf !== "" ? "has-val input" : "input"}
                  type="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
                <div className="focus-input" data-placeholder="Cpf"></div>
              </div>
        
              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="focus-input" data-placeholder="Password"></div>
              </div>
    
              <div className="container-a-form-btn">
                <button className="a-form-btn">Cadastro</button>
              </div>
    
              <div className="text-center">
                <div className="txt1">Possui conta? </div>
                <Link className="txt2" to="/login">
                  Criar conta
                </Link>
              </div>
            </form>
          </div>
        </LayoutContainer>
    );
};

export default TelaCadastro;