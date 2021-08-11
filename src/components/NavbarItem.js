import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';
import image1 from './../assets/logo-dark.png';
import image5 from './../assets/tele.png';
import {Button} from 'react-bootstrap'

const NavbarItem=() =>{
 
    return (
      <Navbar bg="myred"  fixed="top" variant="dark">
          <Navbar.Brand>
         <img src={image1}  alt="description of image"
           height="51px"/>
         </Navbar.Brand>
         <Nav>
           <Nav.Link href="Home"><b style={{color:"#fff" , marginLeft: "95px",padding: "17px 16px"}}>HOME</b></Nav.Link>
           <Nav.Link href="about us"><b style={{color:"#fff",marginLeft: "3px"}}>ABOUT US</b></Nav.Link>
           <Nav.Link href="plan"><b style={{color:"#fff" ,marginLeft: "18px"}}>PLAN </b></Nav.Link>
           <Nav.Link href="our documents"><b style={{color:"#fff",marginLeft: "18px"}}>OUR DOCUMENTS</b></Nav.Link>
           <Nav.Link href="faq"><b style={{color:"#fff",marginLeft: "18px"}}>FAQ</b> </Nav.Link>
           <Nav.Link href="contact us"><b style={{color:"#fff",marginLeft: "18px"}}>CONTACT US</b> </Nav.Link>&nbsp;&nbsp;&nbsp;
         </Nav>
         <Button variant="secondary"><i class="fa fa-user"></i><b>LOGIN</b></Button>&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="primary"><i class="fa fa-user-plus"></i><b>REGISTER</b></Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;
         <img src={image5} alt="description of image" marginLeft="36px" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         </Navbar>
          );
   
   
}
      
 
export default NavbarItem;