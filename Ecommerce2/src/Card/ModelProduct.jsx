import axios from "axios";
import React, { useState } from "react";
import { Button, Modal,Col,Input, ModalHeader, Label,ModalBody, ModalFooter ,Form,FormGroup,Alert} from "reactstrap";
const ModelProduct = () => {
  const [data,setdata]=useState({
    ProductName:"",
    Nproduct:""
  })
  const handlechange=(e)=>{
    setdata(prevalue=>({...prevalue,[e.target.name]:e.target.value}))
  }
  const handlesubmit=async(e)=>{
    e.preventDefault()
    try {
      const productdata=await axios.post("http://localhost:4000/postproductdata",{...data})
      localStorage.setItem("productdata",JSON.stringify(productdata))
    } catch (error) {
      console.log(error)
    }
  }
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color="secondary" onClick={toggle}>
        Order
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Order</ModalHeader>
        <ModalBody>
          <Form onSubmit={handlesubmit}>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Product Name
              </Label>
              <Col sm={10}>
                <Input
                  name="ProductName"
                  placeholder="Name"
                  type="text"
                  value={data.ProductName}
                  onChange={handlechange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label  sm={2}>
                Number Of Product
              </Label>
              <Col sm={10}>
                <Input
                  name="Nproduct"
                  placeholder="Number"
                  type="text"
                  value={data.Nproduct}
                  onChange={handlechange}
                />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col
                sm={{
                  offset: 2,
                  size: 10,
                }}
              >
                <Button type="submit">Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModelProduct;
