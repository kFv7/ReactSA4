import '../../components/Input/InputGlobal.css';
import '../../components/Button/ButtonGlobal.css';
import LayoutForm from "../../components/Layout/LayoutForm";
import NavbarLoReg from "../../components/Navbar/NavbarLoReg.js";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AnnouncementAp() {
    const [address, setAddress] = useState("");
    const [rentalPrice, setRentalPrice] = useState("");
    const [bathroomNumber, setBathroomNumber] = useState("");
    const [bedroomsNumber, setBedroomsNumber] = useState("");
    const [size, setSize] = useState("");
    const navigate = useNavigate();

    const RegisterAnnouncementAp = async () => {
        const response = await axios.post("http://localhost:8080/apartments", {address, rentalPrice, bathroomNumber, bedroomsNumber, size});
        return navigate('/home');
    }

return (
<container-test>
    <NavbarLoReg/>
        <LayoutForm>

            <div className="wrap-input">
                <input
                className={address !== "" ? "has-val input" : "input"}
                type="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
                <div className="focus-input" data-placeholder="Endereço"></div>
            </div>

            <div className="wrap-input">
                <input
                className={bathroomNumber !== "" ? "has-val input" : "input"}
                type="bathroomNumber"
                value={bathroomNumber}
                onChange={(e) => setBathroomNumber(e.target.value)}
                />
                <div className="focus-input" data-placeholder="Número de banheiros"></div>
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

            <div className="wrap-input">
                <input
                className={bedroomsNumber !== "" ? "has-val input" : "input"}
                type="bedroomsNumber"
                value={bedroomsNumber}
                onChange={(e) => setBedroomsNumber(e.target.value)}
                />
                <div className="focus-input" data-placeholder="Número de quartos"></div>
            </div>

            <div className="wrap-input">
                <input
                className={size !== "" ? "has-val input" : "input"}
                type="size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                />
                <div className="focus-input" data-placeholder="Tamanho (metro quadrado)"></div>
            </div>

            <div className="container-a-form-btn">
                <button className="a-form-btn" onClick={RegisterAnnouncementAp}>Concluir Anuncio</button>
            </div>
        </LayoutForm>
</container-test>  
)
}

export default AnnouncementAp;