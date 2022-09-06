import {Component} from "react";
import {Nav} from "react-bootstrap";

class MyFooter extends Component {
    render(){
        return(
            <>
                <footer className="d-flex  container flex-row myFooter">
                    <div className="d-flex justify-content-center align-items-center">
                        <p className="mt-3">Follow us on Social Media!</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                    <i className="bi bi-facebook"></i>                        
                    </div>
                </footer>
            </>
        )
    }
}

export default MyFooter;