import {Component} from "react";
import {Nav} from "react-bootstrap";

class MyNav extends Component {
    render(){
        return(
            <>
                <Nav justify variant="tabs" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2">Browse</Nav.Link>
                  </Nav.Item>                  
                </Nav>
            </>
        )
    }
}

export default MyNav;