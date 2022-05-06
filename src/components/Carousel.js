import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brac from "./Images/brac.jpg";
import Bracc from "./Images/bracc.jpg";
import Braccc from "./Images/braccc.jpg";
function Slide() {
  return (
    <div>
      <Carousel
        style={{ marginTop: "2%", marginLeft: "4%", marginRight: "4%" }}
        variant="dark"
      >
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src={Brac}
            alt="First slide"
          />

          <Carousel.Caption>
            <h5>Necklaces</h5>
            <p>the winter collection</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src={Bracc}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5> men Bracelets</h5>
            <p>a large choice to choose from</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src={Braccc}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>phone charms </h5>
            <p>Play with colours</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slide;
