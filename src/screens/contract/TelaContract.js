import { useState } from 'react';
import '../../components/Input/InputGlobal.css';
import '../../components/Button/ButtonGlobal.css';
import LayoutForm from "../../components/Layout/LayoutForm";
import axios from 'axios';

function TelaContract() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const RegisterContract = async() => {
        const response = await axios.post("http://localhost:8080/Contract", {startDate, endDate})
      }

    return (
        <LayoutForm>
            <div className="wrap-input">
                <input
                  className={startDate !== "" ? "has-val input" : "input"}
                  type="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <div className="focus-input" data-placeholder="Data de entrada"></div>
            </div>

            <div className="wrap-input">
                <input
                  className={endDate !== "" ? "has-val input" : "input"}
                  type="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <div className="focus-input" data-placeholder="Data de saida"></div>
            </div>

            <div className="container-a-form-btn">
                <button className="a-form-btn" onClick={RegisterContract}>Concluir Cadastro</button>
            </div>

        </LayoutForm>
    )
}

export default TelaContract;
