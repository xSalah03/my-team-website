import React from 'react'
import img1 from '../../../assets/Imgs/img1.png';
import MYTEAM from '../../../assets/Videos/slide video myteam.mp4';
import './Main.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Video = () => {
    return (
        <div className='app'>
            <video src={MYTEAM} autoPlay loop muted />
            <Container >
                <Row className='row1'>
                    <div className='background'>
                    </div>
                    <Col className='main-image'>
                        <img className='image1' src={img1} />
                    </Col>
                    <Col>
                        <p className='title'>A propos de MyTeam</p>
                        <p className='text'>Développée spécifiquement selon les besoins des clubs professionnels, MyTeam est une solution numérique composée de modules de gestion administrative, performance, sportive et médicale.</p>
                        <p className='text'>En centralisant toutes ces données, la plateforme constitue un outil indispensable pour la structuration des entités professionnelles. Du joueur au staff, chaque collaborateur dispose d’un accès exclusivement adapté à sa fonction, à ses besoins et à ses droits d’utilisation.</p>
                        <p className='text'> Chacun enrichit le profil de l’équipe ou des joueurs, qui sont placés au coeur de la réflexion. En retour, la plateforme croise les données et favorise ainsi une évaluation optimisée des performances individuelles et de leurs évolutions.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <button className='demo-button'>
                            <span>DEMANDE DE DÉMO</span>
                            <FontAwesomeIcon icon={faFile} />
                        </button>
                    </Col>
                </Row>
            </Container >
        </div >

    )
}

export default Video