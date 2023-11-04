import "./TelaCadastroStyle.css";
import { useState } from 'react';

function TelaCadastro(){
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    
    return (
      <div className="container">
        <div className="container-cadastro">
          <div className="wrap-cadastro">
            <form className="cadastro-form">

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
    
              <div className="container-cadastro-form-btn">
                <button className="cadastro-form-btn">Cadastro</button>
              </div>
    
              <div className="text-center">
                <div className="txt1">Possui conta? </div>
                <a className="txt2" href="https://www.youtube.com/">
                  Criar conta
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default TelaCadastro;