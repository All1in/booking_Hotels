import React, { FC, useState, useEffect } from 'react';
import Heading from "../UI/Heading/Heading";
import styles from "./Slider.module.scss"
import { useSlider } from "../../hooks/useSlider";

interface SliderProps {
    width?: number,
    height?: number,
    autoPlay?: boolean,
    autoPlayTime?: number
}

interface SliderToPaste {
    id: number,
    textInfo: string,
    author: string,
    image: string
}


const Slider: FC<SliderProps> = ({
       width,
       height,
       autoPlay,
       autoPlayTime }) => {
    // const { handleTouchStart, handleTouchMove } = useSlider() // type problems)))
    return (
        <div
            style={{ width, height }}
            className={styles.sliderContainer}
            // onTouchStart={handleTouchStart}
            // onTouchMove={handleTouchMove}
        >
            <Heading readerHeadline="Testimonials"/>
            <h2 className={styles.headline}> What Customers Say? </h2>
        </div>
    );
};

export default Slider;