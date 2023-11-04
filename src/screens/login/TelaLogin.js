import { Link } from "react-router-dom";
import React, { useState } from 'react';
import '../../components/Input/InputGlobal.css'
import '../../components/Button/ButtonGlobal.css'
import '../../components/Layout/LayoutForm.css'
import '../../components/Layout/LayoutContainer.js'
import LayoutContainer from "../../components/Layout/LayoutContainer.js";

function TelaLogin() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

return (
    <LayoutContainer>
      <div className="wrap-a">
        <form className="a-form">

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
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="focus-input" data-placeholder="Password"></div>
          </div>

          <div className="container-a-form-btn">
            <button className="a-form-btn">Login</button>
          </div>

          <div className="text-center">
            <div className="txt1">Não possui conta? </div>
            <Link className="txt2" to="/register">
              Criar conta
            </Link>
          </div>
        </form>
      </div>
    </LayoutContainer>
);

};

export default TelaLogin;