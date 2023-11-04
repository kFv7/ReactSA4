import { Link } from "react-router-dom";
import React, { useState } from 'react';
import '../../components/Input/InputGlobal.css'
import '../../components/Button/ButtonGlobal.css'
import LayoutForm from "../../components/Layout/LayoutForm.js";

function TelaLogin() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

return (
    <LayoutForm>
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
    </LayoutForm>
  );

};

export default TelaLogin;