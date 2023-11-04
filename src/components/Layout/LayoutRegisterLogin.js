import './LayoutRegisterLogin.css';

function LayoutRegisterLogin(props){
    return (
        <div className="container">        
            <div className="container-a">
                <div className="wrap-a">
                    {props.children}
                </div>
            </div>
        </div>

    )
}

export default LayoutRegisterLogin;