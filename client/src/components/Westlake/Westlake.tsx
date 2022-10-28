import React, { FC } from 'react';
import styles from "./Westlake.module.scss"



interface WestlakeProps {
    headlineWestlake: string,
    paragraphWestlake: string,
    anotherParagraph: string
}

const Westlake: FC<WestlakeProps> = ({
       headlineWestlake,
       paragraphWestlake,
       anotherParagraph}) => {
    return (
        <div>
            <h2 className={styles.headlineWestlake}> { headlineWestlake } </h2>
            <p className={styles.paragraphWestlake}>
                { paragraphWestlake }
            </p>
            <p className={styles.anotherParagraph}>
                { anotherParagraph }
            </p>
        </div>
    );
};

export default Westlake;