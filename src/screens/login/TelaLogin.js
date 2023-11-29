import { Link} from "react-router-dom";
import React, { useState } from 'react';
import '../../components/Input/InputGlobal.css'
import '../../components/Button/ButtonGlobal.css'
import LayoutForm from "../../components/Layout/LayoutForm.js";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import NavbarLoReg from "../../components/Navbar/NavbarLoReg.js";

function TelaLogin() {

const [login, setLogin] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
    

const LoginUser = async (e) => {
  e.preventDefault()
    const responseLogin = await axios.post("http://localhost:8080/login", {login, password})
    localStorage.setItem("token", responseLogin.data.token)
    return navigate('/home');
}


return (
  <container-test>
    <NavbarLoReg/>
    <LayoutForm>
          <div className="wrap-input">
            <input
              className={login !== "" ? "has-val input" : "input"}
              type="email"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <div className="focus-input" data-placeholder="Email"></div>
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
            <button className="a-form-btn" onClick={LoginUser}>Entrar</button>
          </div>

          <div className="text-center">
            <div className="txt1">Não possui conta? </div>
            <Link className="txt2" to="/register">
              Criar conta
            </Link>
          </div>
    </LayoutForm>
    </container-test>

  );

};

export default TelaLogin;