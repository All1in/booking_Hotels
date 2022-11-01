import React, { FC } from 'react';
import styles from "./CheckInOut.module.scss"

interface CheckInOutProps {
    inputFor: string
}

const CheckInOut: FC<CheckInOutProps> = ({ inputFor }) => {
    return (
        <div className={styles.checkInOut}>
            <label className={styles.myLabel} htmlFor="check-in"> { inputFor } </label>
            <input
                type="date"
                className={styles.dataInput}
            />
        </div>
    );
};

export default CheckInOut;