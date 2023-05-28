import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Block.scss";
import ScrollTrigger from 'react-scroll-trigger';
import Aos from "aos";
import "aos/dist/aos.css";

const Block = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <div>
        <ScrollTrigger>
        <Container className='block-container'>
        <div className="solution-title">
            <h2 className="title">Une solution sur mesure adaptée à vos objectifs de performance.</h2>
        </div>
                    <Row>
                        <div className='cards' data-aos="fade-right">
                            <div className='block'>
                                <div className='block-filter'></div>
                                <Col>
                                    <img src="https://www.mycoach.pro/assets/img/home-gerer-img.jpg" />
                                </Col>
                                <div className='block-filter'></div>
                                <Col xs={8} className='flex-box'>
                                    <h5>GÉRER ET ANTICIPER</h5>
                                    <p>La performance d'athlètes ou d'équipes nécessite la gestion de données sportives, administratives et médicales. MyCoach Pro les rassemble et permet d’accéder à un suivi complet des sportifs pour appréhender de façon optimale leur condition physique. Le club dispose ainsi dans sa globalité d’un outil d’aide à la décision pour limiter les incertitudes et garder un avantage compétitif.</p>
                                    <button className='demo-button-sm'>
                                        <span>En savoir +</span>
                                    </button>
                                </Col>
                            </div>
                        </div>
                        <div className='cards' data-aos="fade-right">
                            <div className='block'>
                                <div className='block-filter'></div>
                                <Col>
                                    <img src="https://www.mycoach.pro/assets/img/home-monitorer-img.jpg" />
                                </Col>
                                <div className='block-filter'></div>
                                <Col xs={8} className='flex-box'>
                                    <h5>GÉRER ET ANTICIPER</h5>
                                    <p>La performance d'athlètes ou d'équipes nécessite la gestion de données sportives, administratives et médicales. MyCoach Pro les rassemble et permet d’accéder à un suivi complet des sportifs pour appréhender de façon optimale leur condition physique. Le club dispose ainsi dans sa globalité d’un outil d’aide à la décision pour limiter les incertitudes et garder un avantage compétitif.</p>
                                    <button className='demo-button-sm'>
                                        <span>En savoir +</span>
                                    </button>
                                </Col>
                            </div>
                        </div>
                        <div className='cards' data-aos="fade-right">
                            <div className='block'>
                                <div className='block-filter'></div>
                                <Col>
                                    <img src="https://www.mycoach.pro/assets/img/home-gerer-img.jpg" />
                                </Col>
                                <div className='block-filter'></div>
                                <Col xs={8} className='flex-box'>
                                    <h5>GÉRER ET ANTICIPER</h5>
                                    <p>La performance d'athlètes ou d'équipes nécessite la gestion de données sportives, administratives et médicales. MyCoach Pro les rassemble et permet d’accéder à un suivi complet des sportifs pour appréhender de façon optimale leur condition physique. Le club dispose ainsi dans sa globalité d’un outil d’aide à la décision pour limiter les incertitudes et garder un avantage compétitif.</p>
                                    <button className='demo-button-sm'>
                                        <span>En savoir +</span>
                                    </button>
                                </Col>
                            </div>
                        </div>
                    </Row>
                </Container>
            </ScrollTrigger>

        </div>
    )
}

export default Block