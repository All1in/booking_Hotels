import React, { FC } from 'react';
import UserLink from "../UI/UserLink/UserLink";
import styles from "./Description.module.scss"

interface DescriptionProps {
    headline: string,
    description: string
}

const Description: FC<DescriptionProps> = ({ headline, description}) => {
    return (
        <React.Fragment>
            <h2 className={styles.headline}> { headline }</h2>
            <p
                className={styles.description}
            >
                { description }
            </p>

            <UserLink
                linkCaption="Discover Now"
            />
        </React.Fragment>
    );
};

export default Description;