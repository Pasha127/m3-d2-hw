import {Component} from "react";
import {Carousel} from "react-bootstrap";
import books from "../books/fantasy.json";


class LatestRelease extends Component {
    render(){
        return(
            <Carousel>
                {books.map((book, index) => (
                    <Carousel.Item key={`fantasy-book-${index}`} className="my-carousel">
                        <img src={book.img}></img>

                    </Carousel.Item>
                )

                

                )}
            
            </Carousel>
        )
    }
}

export default LatestRelease;