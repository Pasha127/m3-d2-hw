import {Component} from "react";
import {} from "react-bootstrap";

class Welcome extends Component {
    state = {
        clicked: null
    };
    render(){
        return(
            <>
            {this.state.clicked ? null :
                <div className="jumbotron">
                  <h1 className="display-4">Hello, Readers!</h1>
                  <div className="my-4 border-top border-white"></div>                 
                  <p>Welcome to the Strive Book App!</p>
                  <a onClick={(( )=>{this.setState({ clicked: true });})} className="btn btn-primary btn-lg" href="#" role="button">Click To Enter</a>
                </div>}
            </>
        )
    }
}

export default Welcome;