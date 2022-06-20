import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap'
import styled from 'styled-components'
import {Search} from '@styled-icons/boxicons-solid/Search'
import ImageInSrc from "./image_in_src.png"
import style from './style.css'


function App() {
  return (
    <div className="App">
    <div className="row">
        <div className="col-md-12">
                <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                    <Navbar.Brand href="#home" style={{marginLeft:"10%", fontSize:28, wordSpacing:"10px"}}>WILSMAIL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:"40%"}}>
                        <Nav className="mr-auto">
                        <Nav.Link href="/" >Home</Nav.Link>
                        <Nav.Link href="/about-us">Contact</Nav.Link>
                        <Nav.Link href="/contact-us">About</Nav.Link>
                        </Nav>
                        <Form inline style={{display:"flex"}}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width:"75%"}}/>
                        <Search style={{width:30, color:"whitesmoke", marginLeft:10 }} />
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <br />
        </div>
    </div>

    <div style={{maxWidth:"100vw"}}>
      <h1 className="title">CHECKPOINT JSX</h1>
      <br/>
      <img src="/image_in_public.png" style={{width:300}}/>
      <br/>
      <img src={ImageInSrc} style={{width:"100%"}}/>
    </div>
    
    <video src="myVideo.mp4" type="video/mp4" style={{width:320, height:240, display:"none"}} controls>
    </video>

    </div>
  );
}

export default App;
