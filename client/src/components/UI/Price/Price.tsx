import React, { FC } from 'react';
import styles from "./Price.module.scss"

interface PriceProps {
    pricing: number,
    perWhat: string
}

const Price: FC<PriceProps> = ({ pricing, perWhat }) => {
    return (
        <div className={styles.priceContainer}>
            <span className={styles.price}> { pricing }$ </span>
            <span className={styles.perNight}> /{perWhat} </span>
        </div>
    );
};

export default Price;