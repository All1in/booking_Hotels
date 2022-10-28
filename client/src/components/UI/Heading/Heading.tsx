import React, {FC} from 'react';
import styles from "./HeadingProps.module.scss"

interface HeadingProps {
    readerHeadline: string,
}

const Heading: FC<HeadingProps> = ({ readerHeadline }) => {
    return (
        <div className={styles.headlineContainer}>
            <h5 className={styles.headline}> { readerHeadline } </h5>
        </div>
    );
};

export default Heading;