import { Link } from "react-router-dom";
import { useState } from 'react';
import '../../components/Input/InputGlobal.css';
import '../../components/Button/ButtonGlobal.css';
import LayoutForm from "../../components/Layout/LayoutForm.js";
import axios from "axios";
import NavbarLoReg from "../../components/Navbar/NavbarLoReg.js";

function TelaCadastro(){
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    const RegistrarUser = async() => {
      const response = await axios.post("http://localhost:8080/users", {name, email, "CPF": cpf, password})
    }
    
    return (
      <container-test>
        <NavbarLoReg/>
          <LayoutForm>
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
                <button className="a-form-btn" onClick={RegistrarUser}>Concluir Cadastro</button>
              </div>
    
              <div className="text-center">
                <div className="txt1">Possui conta? </div>
                <Link className="txt2" to="/login">
                  Entrar
                </Link>
              </div>
          </LayoutForm>
        </container-test>
    );
};

export default TelaCadastro;