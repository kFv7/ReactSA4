import { Link, Navigate} from "react-router-dom";
import React, { useState } from 'react';
import '../../components/Input/InputGlobal.css'
import '../../components/Button/ButtonGlobal.css'
import LayoutForm from "../../components/Layout/LayoutForm.js";
import axios from "axios";

function TelaLogin() {

const [login, setLogin] = useState("");
const [password, setPassword] = useState("");

    

const LoginUser = async (e) => {
  e.preventDefault()
    const responseLogin = await axios.post("http://localhost:8080/login", {login, password})
    localStorage.setItem("token", responseLogin.data.token)
}

if (LoginUser) {
  return <Navigate to="/home"/>
}

return (
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
            <button className="a-form-btn" onClick={LoginUser}>Login</button>
          </div>

          <div className="text-center">
            <div className="txt1">Não possui conta? </div>
            <Link className="txt2" to="/register">
              Criar conta
            </Link>
          </div>
    </LayoutForm>
  );

};

export default TelaLogin;