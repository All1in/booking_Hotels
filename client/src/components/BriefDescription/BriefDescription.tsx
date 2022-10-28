import React, { FC } from 'react';
import Picture from "../UI/Picture/Picture";
import styles from "./BriefDescription.module.scss"

interface BriefDescriptionProps {
    briefHeadline: string,
    briefPar: string
}

const BriefDescription: FC<BriefDescriptionProps> = ({ briefHeadline, briefPar }) => {
    return (
        <div className={styles.briefDescription}>
            {/*/// svg*/}
            <Picture />
            {/*/// svg*/}
            <h4 className={styles.briefHeadline}> { briefHeadline } </h4>
            <p className={styles.briefPar}> { briefPar } </p>
        </div>
    );
};

export default BriefDescription;