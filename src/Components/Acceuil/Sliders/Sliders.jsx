import "./Sliders.scss";
import Slider1 from "./Children/Slide1";

export default function App() {
  return (
    <div className="AppSlide">
      <div className="diminuir">
        <h2 className="title">Témoignages</h2>
        <Slider1 />
      </div>
    </div>
  );
}
