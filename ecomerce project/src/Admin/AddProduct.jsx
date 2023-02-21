import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  Row,
  Col,
} from "reactstrap";
const AddProduct = () => {
  const [formdata, setformdata] = useState({
    Pname: "",
    Pmodel: "",
    price: "",
    Hardisk: "",
    Ram: "",
    file: "",
  });
  // const [imageSrc, setImageSrc] = useState("");

  // function handleFileChange(event) {
  //   const file = event.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onload = function (event) {
  //       setImageSrc(event.target.result);
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // }
 
  const handlechange = (e) => {
    setformdata((prevalue) => ({
      ...prevalue,
      [e.target.name]: e.target.value,
    }));
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const products = await axios.post(
        "http://localhost:4000/api/Product/addproduct",
        {
          ...formdata,
        }
      );
      console.log(products);
      localStorage.setItem("product", JSON.stringify(products));
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div>
      <Row>
        <Col sm="2"></Col>
        <Col sm="8">
          <Card body>
            <Form onSubmit={handlesubmit}>
              <FormGroup>
                <Label for="Product Name">Product Name</Label>
                <Input
                  type="text"
                  name="Pname"
                  placeholder="Name"
                  value={formdata.Pname}
                  onChange={handlechange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Model">Model</Label>
                <Input
                  type="text"
                  name="Pmodel"
                  placeholder="Model"
                  value={formdata.Pmodel}
                  onChange={handlechange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Price">Price</Label>
                <Input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formdata.price}
                  onChange={handlechange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Hardisk">Hardisk</Label>
                <Input
                  type="text"
                  name="Hardisk"
                  placeholder="Hardisk"
                  value={formdata.Hardisk}
                  onChange={handlechange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Ram">Ram</Label>
                <Input
                  type="text"
                  name="Ram"
                  placeholder="Ram"
                  value={formdata.Ram}
                  onChange={handlechange}
                />
              </FormGroup>
              {/* <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input id="exampleFile" name="file" type="file" 
                accept="image/*" onChange={handleFileChange} 
                value={formdata.file}
                />
              </FormGroup>
              {imageSrc && <img src={imageSrc} alt="Selected Image" style={{width:"50px"}}/>} */}
              <Button type="submit">Add Product</Button>
            </Form>
          </Card>
        </Col>
        <Col sm="2"></Col>
      </Row>
    </div>
  );
};

export default AddProduct;
