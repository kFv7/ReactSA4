import { useState } from 'react';
import '../../components/Input/InputGlobal.css';
import '../../components/Button/ButtonGlobal.css';
import LayoutForm from "../../components/Layout/LayoutForm";
import axios from 'axios';
import NavbarLoReg from "../../components/Navbar/NavbarLoReg.js";

function TelaReservation() {
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [reserveStatus, setReserveStatus] = useState("");
    const [rentalPrice, setRentalPrice] = useState("");

    const RegisterReservation = async() => {
      const response = await axios.post("http://localhost:8080/reservation", {checkin, checkout, reserveStatus, rentalPrice})
    }

    return(
      <container-test>
        <NavbarLoReg/>
        <LayoutForm>
              <div className="wrap-input">
                <input
                  className={checkin !== "" ? "has-val input" : "input"}
                  type="checkin"
                  value={checkin}
                  onChange={(e) => setCheckin(e.target.value)}
                />
                <div className="focus-input" data-placeholder="Checkin"></div>
              </div>

              <div className="wrap-input">
                <input
                  className={checkout !== "" ? "has-val input" : "input"}
                  type="checkout"
                  value={checkout}
                  onChange={(e) => setCheckout(e.target.value)}
                />
                <div className="focus-input" data-placeholder="Checkout"></div>
              </div>

              <div className="wrap-input">
                <input
                  className={reserveStatus !== "" ? "has-val input" : "input"}
                  type="reserveStatus"
                  value={reserveStatus}
                  onChange={(e) => setReserveStatus(e.target.value)}
                />
                <div className="focus-input" data-placeholder="Status da reserva"></div>
              </div>

              <div className="wrap-input">
                <input
                  className={rentalPrice !== "" ? "has-val input" : "input"}
                  type="rentalPrice"
                  value={rentalPrice}
                  onChange={(e) => setRentalPrice(e.target.value)}
                />
                <div className="focus-input" data-placeholder="Preço"></div>
              </div>

              <div className="container-a-form-btn">
                <button className="a-form-btn" onClick={RegisterReservation}>Concluir Anuncio</button>
              </div>
        </LayoutForm>
      </container-test>  
    )
}

export default TelaReservation;