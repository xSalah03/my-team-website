import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/Imgs/logo-myteam-1.png';
import "./Footer.scss";
import { Outlet } from 'react-router-dom'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div>
            <Container fluid className='footer'>



                <Row>
                    <Col>


                        <div className='footer-icons'>
                            <img src={logo} />
                            <FontAwesomeIcon className='footer-icon' icon={faTwitter} />
                            <FontAwesomeIcon className='footer-icon' icon={faFacebook} />
                            <FontAwesomeIcon className='footer-icon' icon={faInstagram} />
                            <FontAwesomeIcon className='footer-icon' icon={faYoutube} />
                        </div>
                    </Col>
                    <Col className='footer-desc'>
                        <p>#MadeInMorocco <span><img src='https://static.xx.fbcdn.net/images/emoji.php/v9/te2/2/16/1f1f2_1f1e6.png' /></span><br />
                            Casablanca,MAROC<br />
                            +212 679 026 909<br />
                            contact@myteam.ma</p>
                    </Col>
                    <Col className='footer-desc'>
                        <p className='left'>
                            Contact
                            Mentions légales
                            A propos
                            Communiqués de presse
                            Politique de confidentialité
                            Conditions Générales d’Utilisation
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className='footer-desc'>
                        <p className='copyright'>© 2021 - MyTeam Sport</p>
                    </Col>
                </Row>
            </Container>
            <Outlet></Outlet>
        </div>
    )
}

export default Footer