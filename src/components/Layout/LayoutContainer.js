import './LayoutContainer.css'

function LayoutContainer(props){
    return(
        <div className="container">
            <div className="container-a">
                {props.children}
            </div>
        </div>
    );
};

export default LayoutContainer;