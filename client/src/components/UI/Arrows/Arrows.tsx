import React, { FC } from 'react';
import { BiLeftArrow } from "react-icons/bi"
import { BiRightArrow } from "react-icons/bi"
import styles from "./Arrows.module.scss"

interface ArrowsProps {
    // props
}


const Arrows: FC<ArrowsProps> = () => {
    // const fn
    return (
        <div className={styles.arrowsContainer}>
            <BiLeftArrow
                // onClick={}
            />
            <BiRightArrow
                // onClick={}
            />
        </div>
    );
};

export default Arrows;