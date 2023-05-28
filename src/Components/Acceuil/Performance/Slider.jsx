import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

export default (props) => {
    const [activeSlide, setactiveSlide] = useState(props.activeSlide);

    const next = () =>
        activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

    const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

    const [getSlide, setGetSlide] = useState(false);

    const getStyles = (index) => {
        if (activeSlide === index) {
            return {
                opacity: 1,
                transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
                zIndex: 10
            };
        }
        else if (activeSlide - 1 === index)
            return {
                filter: "brightness(0.6)",
                opacity: 1,
                transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
                zIndex: 9
            };
        else if (activeSlide + 1 === index)
            return {
                filter: "brightness(0.6)",
                opacity: 1,
                transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
                zIndex: 9
            };
        else if (activeSlide - 2 === index)
            return {
                filter: "brightness(0.4)",
                opacity: 1,
                transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
                zIndex: 8
            };
        else if (activeSlide + 2 === index)
            return {
                filter: "brightness(0.4)",
                opacity: 1,
                transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
                zIndex: 8
            };
        else if (index < activeSlide - 2)
            return {
                filter: "brightness(0.4)",
                opacity: 0,
                transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
                zIndex: 7
            };

        else if (index > activeSlide + 2)
            return {
                filter: "brightness(0.4)",
                opacity: 0,
                transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
                zIndex: 7
            };
    };

    return (
        <div className="slider-App">
            <div className="App-header">
                <div className="global-slider">
                    <h2 className="title">Utilisateurs clés, Notre solution s’adapte à tout le monde.</h2>
                    {/* carousel */}
                    <div className="slideC"
                        onClick={() => { setGetSlide(!getSlide) }}
                        >
                        {props.data.map((item, i) => (
                            <React.Fragment key={item.id}>
                            {activeSlide == i ? <span className="description">{item.paragraph}</span> : ""}
                                <div
                                    className="slide"
                                    style={{
                                        backgroundImage: `url(${item.bgImage})`,
                                        boxShadow: `0 5px 20px ${item.bgImage}30`,
                                        ...getStyles(i)
                                    }}
                                >
                                    <div className="sliderContent">
                                        {activeSlide == i ? <div className="bande"><p>{item.icon} {item.title}</p></div> : <div><p>{item.icon}</p></div>}
                                    </div>
                                </div>
                                <div
                                    className="reflection"
                                    style={{
                                        background: `linear-gradient(to bottom, ${item.bgImage}40, transparent)`,
                                        ...getStyles(i)
                                    }}
                                />
                            </React.Fragment>
                        ))}
                    </div>
                    {/* carousel */}

                    <div className="btns">
                        <FontAwesomeIcon
                            className="btn"
                            onClick={prev}
                            icon={faChevronLeft}
                            color="#fff"
                            size="2x"
                        />
                        <FontAwesomeIcon
                            className="btn"
                            onClick={next}
                            icon={faChevronRight}
                            color="#fff"
                            size="2x"
                        />
                    </div>
                </div >
            </div>
        </div>
    );
};
