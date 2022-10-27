import React, { FC } from 'react';
import styles from "./Intercontinental.module.scss"
import Description from "../Description/Description";

interface IntercontinentalProps {
    /// props
}

const Intercontinental: FC = ({}) => {
    return (
        <div className={styles.intercontinental}>
            <Description
                headline="Intercontinental LA  Westlake Hotel"
                description="Sona.com is a leading online accommodation site.
                    We’re passionate about
                    travel.
                    Every day, we inspire and reach millions of travelers across
                    90 local websites in 41
                    languages."
            />
        </div>
    );
};

export default Intercontinental;