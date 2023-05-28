import React from 'react'
import Slider from "./Slider";
import data from "./data";
import "./Performance.scss";

const Performance = () => {
  return (
    <Slider data={data} activeSlide={2} />
  )
}

export default Performance