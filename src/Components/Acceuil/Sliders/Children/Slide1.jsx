import "../Sliders.scss";
import { slides } from "./Dados";
import Slide from "./Slide";
import React from "react";

export default function Slider1() {
    const initialState = {
        slideIndex: 0
    };

    const slidesReducer = (state, event) => {
        if (event.type === "PREV") {
            return {
                ...state,
                slideIndex: (state.slideIndex + 1) % slides.length
            };
        }
        if (event.type === "NEXT") {
            return {
                ...state,
                slideIndex:
                    state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
            };
        }
    };

    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    return (
        <div className="slides">
            <button className="esquerda" onClick={() => dispatch({ type: "PREV" })}>
                ‹
            </button>

            {[...slides, ...slides, ...slides].map((slide, i) => {
                let offset = slides.length + (state.slideIndex - i);
                return <Slide slide={slide} offset={offset} key={i} />;
            })}
            <button className="direita" onClick={() => dispatch({ type: "NEXT" })}>
                ›
            </button>
        </div>
    );
}

/*



function App() {
  return (
    <div className="slides">
      <button onClick={() => dispatch({ type: "NEXT" })}>‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
}

const elApp = document.getElementById("app");
ReactDOM.render(<App />, elApp);

*/
