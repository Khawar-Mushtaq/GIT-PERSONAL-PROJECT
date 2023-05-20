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
const Login = () => {
  const [logindata,setlogindata]=useState({
    username:"",
    password:"",
})
const navigation=useNavigate("")
const [isValidPassword,setIsValidPassword]=useState("")
const [isValidUserName,setIsValidUserName]=useState("")
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
    const { username,password}=e.target.elements;
    const formdata={
      username:username.value,
      password:password.value
    }
    setlogindata(formdata)
    try {
      const data=await axios.post("http://localhost:4000/login"
      ,{...logindata})
      if(!data){
        alert("Server is not Responding")
      }
      else{
        localStorage.setItem("data",JSON.stringify(data))
        console.log("Login is successful"+logindata)
        console.log(data)
        navigation("/MainPage")
      }
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
      <CardHeader style={{ textAlign: "center" }}>Login </CardHeader>
      <CardBody>
        <Form onSubmit={handlesubmit}>
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
        <Link to={'/user/Registerform'}>Register yourself</Link>
      </CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  </div>
</div>
);
};

export default Login
