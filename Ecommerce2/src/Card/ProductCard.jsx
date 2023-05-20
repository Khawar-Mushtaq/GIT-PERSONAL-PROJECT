import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col
} from "reactstrap";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"
import img7 from "../images/img7.jpg"
import IMG8 from "../images/IMG8.jpg"
import ModelProduct from "./ModelProduct";
const ProductCard = () => {
  return (
    <div class='container'>
        <Row>
            <Col sm='3'>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={img1} style={{width:'200px'}}/>
        <CardBody>
          <CardTitle tag="h5">Focal Stellia Closed-Back Headphones (available to demo)</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            PKR 2990
          </CardSubtitle>
          <ModelProduct />
        </CardBody>
      </Card>
      </Col>
      <Col sm='3'>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={img2} style={{width:'227px'}} />
        <CardBody>
          <CardTitle tag="h5">Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            PKR 3999
          </CardSubtitle>
          <ModelProduct />
        </CardBody>
      </Card>
      </Col>
      <Col sm='3'>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={img3} style={{width:'224px'}}/>
        <CardBody>
          <CardTitle tag="h5">Beats Solo3 Wireless On-Ear Headphones ,Class 1 Bluetooth</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            PKR 4399
          </CardSubtitle>
          <ModelProduct />
        </CardBody>
      </Card>
      </Col>
      <Col sm='3'>
      <Card
        style={{
          width: "18rem",
          height:'28rem'
        }}
      >
        <img alt="Sample" src={img4} style={{width:'250px'}}/>
        <CardBody>
          <br></br><br></br><br></br>
          <CardTitle tag="h5">Beats Powerbeats Pro Wireless Earbuds - Apple H1 Headphone Chip, Class 1 Bluetooth Headphones,</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            PKR 4499
          </CardSubtitle>
          <ModelProduct />
        </CardBody>
      </Card>
      </Col>
      </Row>
      <Row>
            <Col sm='3'>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={img5} style={{width:'224px'}}/>
        <CardBody>
          <CardTitle tag="h5">Beats Flex Wireless Earbuds – Apple W1 Headphone Chip, Magnetic Earphones, Class 1 Bluetooth</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            PKR 1999
          </CardSubtitle>
          <ModelProduct />
        </CardBody>
      </Card>
      </Col>
      <Col sm='3'>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={img6} style={{width:'200px'}}/>
        <CardBody>
          <CardTitle tag="h5">Beats Fit Pro – True Wireless Noise Cancelling Earbuds  Class 1 Bluetooth®</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            PKR 3499
          </CardSubtitle>
          <ModelProduct />
        </CardBody>
      </Card>
      </Col>
      <Col sm='3'>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={img7} style={{width:'233px'}}/>
        <CardBody>
          <CardTitle tag="h5">TUINYO Wireless Headphones Over Ear, Bluetooth Headphones</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            PKR 2399
          </CardSubtitle>
          <ModelProduct />
        </CardBody>
      </Card>
      </Col>
      <Col sm='3'>
      <Card
        style={{
          width: "18rem",
          height:"27rem"
        }}
      >
        <img alt="Sample" src={IMG8} style={{width:'233px'}}/>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <CardBody>
          <CardTitle tag="h5">ACREO Kids Headphones, Open Ear Bluetooth Headphones </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
             PKR 1599
          </CardSubtitle>
          <ModelProduct />
        </CardBody>
      </Card>
      </Col>
      </Row>
      </div>
  );
};

export default ProductCard;
