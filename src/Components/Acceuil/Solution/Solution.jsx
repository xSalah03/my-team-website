import React, { useEffect, useState } from 'react'
import './Solution.scss';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import Aos from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from 'react-bootstrap';

const Solution = () => {

    const [counterOn, setCounterOn] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    //npm start --host=adresse ip

    return (
        <Container className='solution-container' fluid>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className='global-solution'>
                    <div className='solution-background'></div>
                    <div className='solution-title'>
                        <h2 className="title">Choisissez une solution adaptée à votre profil.</h2>
                    </div>
                    <Row className='solution-countUp'>
                        <Col data-aos="fade-right">
                            <h1>
                                {counterOn && <CountUp start={0} end={13} duration={2} delay={0} />}
                            </h1>
                            <p>sport disponible</p>
                        </Col>
                        <Col data-aos="fade-up">
                            <h1>
                                {counterOn && <CountUp start={0} end={9} duration={2} delay={0} />}
                            </h1>
                            <p>équipe utilisatrices</p>
                        </Col>
                        <Col data-aos="fade-left">
                            <h1>
                                {counterOn && <CountUp start={0} end={20} duration={2} delay={0} />}
                            </h1>
                            <p>de réponces aux questionnaires d'état de forme</p>
                        </Col>
                    </Row>
                </div>
            </ScrollTrigger>
        </Container>
    )
}

export default Solution