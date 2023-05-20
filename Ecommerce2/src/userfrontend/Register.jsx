import axios from "axios";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  CardFooter,
  Row,
  Col,
  FormGroup,
  Label,
  Form,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
    const [registerdata,setregisterdata]=useState({
        email:"",
        username:"",
        password:"",
    })
    const loginNavigation=useNavigate("")
    const [isValidEmail,setIsValidEmail]=useState("")
    const [isValidPassword,setIsValidPassword]=useState("")
    const [isValidUserName,setIsValidUserName]=useState("")
    const handleValidEmailHandler=(e)=>{
      const emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(emailRex.test(e.target.value)===true){
        setIsValidEmail("Email is Valid")
      }else{
        setIsValidEmail("Email is invalid")
      }
    }
    const handleValidPasswordHandler=(e)=>{
      const passRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if(passRegEx.test(e.target.value)===true){
        setIsValidPassword("Password is Valid")
      }else{
        setIsValidPassword("Password is invalid")
      }
      
    }
    const handleValidUserNameHandler=(e)=>{
      const userNameRegex = /^[a-zA-Z0-9_-]+$/;
      if(userNameRegex.test(e.target.value)===true){
        setIsValidUserName("UserName is Valid")
      }else{
        setIsValidUserName("User Name is invalid")
      }
      
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const { email,username,password}=e.target.elements;
        const formdata={
          email:email.value,
          username:username.value,
          password:password.value
        }
        setregisterdata(formdata)
        try {
          const data=await axios.post("http://localhost:4000/register"
          ,{...registerdata})
          localStorage.setItem("data",JSON.stringify(data))
         console.log("Registration is successful"+registerdata)
         loginNavigation("/login")
         
        } catch (error) {
          console.log(error)
        }
        
    }
  return (
    <div>
      <div class="RegistrMain">
        <Card
          className="my-2"
          style={{
            width: "30rem",
          }}
        >
          <CardHeader style={{ textAlign: "center" }}>Registration </CardHeader>
          <CardBody>
            <Form onSubmit={handlesubmit}>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label >Email</Label>
                    <Input type="text" name="email" 
                    valid={isValidEmail==="Email is Valid"}
                    invalid={isValidEmail==="Email is invalid"}
                    onChange={handleValidEmailHandler}
                    required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label >UserName</Label>
                    <Input type="text" name="username" 
                    valid={isValidUserName==="username is valid"}
                    invalid={isValidUserName==="username is invalid"}
                     onChange={handleValidUserNameHandler}
                     required/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label >Password</Label>
                    <Input type="text" name="password" 
                    valid={isValidPassword==="Password is valid"}
                    invalid={isValidPassword==="Password is invalid"}
                     onChange={handleValidPasswordHandler}
                     required/>
                  </FormGroup>
                </Col>
              </Row>
              <Button type="submit" style={{width: "50%", fontWeight: "bold"}}>Submit</Button>
          
            </Form>
            <Link to={'/user/login'}>Already Account Login</Link>
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
