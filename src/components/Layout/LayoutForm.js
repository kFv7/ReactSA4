import './LayoutForm.css'

function LayoutForm(props){
    return(
        <div className="container">
            <div className="container-a">
                <div className="wrap-a">
                    <form className="a-form">
                        {props.children}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LayoutForm;