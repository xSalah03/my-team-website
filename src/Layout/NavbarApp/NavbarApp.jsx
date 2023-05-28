import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import './Appbar.scss';
import logo from '../../assets/Imgs/logomd.png';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import "aos/dist/aos.css";
import Aos from "aos";

const NavbarApp = () => {

    const navigate = useNavigate()

    const [state, setState] = useState(false);

    const changeValueOnscroll = () => {
        const scrollValue = document.documentElement.scrollTop;
        if (scrollValue > 630) {
            setState(true)
        }
        else {
            setState(false)
        }
    }

    window.addEventListener('scroll', changeValueOnscroll)

    useEffect(() => {
        Aos.init({ duration: 2000 })
        console.log(state);
    }, []);

    return (
        <div className='Appbar'>
            <Navbar className={state ? 'navigation-bar-true' : 'navigation-bar'} bg="dark" variant="dark" expand="lg">
                <Container className='appbar-container' fluid>
                    <Navbar.Brand data-aos="fade-right" className={state ? 'bg-logo-true' : 'bg-logo'} href="">
                        <img
                            onClick={() => navigate(`../Home`)}
                            data-aos="fade-right"
                            src={logo}
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='appbar-link' href="#home">LA SOLUTION</Nav.Link>
                            <Nav.Link className='appbar-link' href="#link">LES MODULES</Nav.Link>
                            <Nav.Link className='appbar-link' href="#link">CONTACTS</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Button onClick={() => navigate(`Demo`)} className={state ? 'demo-unvisible' : 'demo'} variant="outline-success">Demender un DEMO</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default NavbarApp;
