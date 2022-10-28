import React, { FC } from 'react';
import Heading from "../UI/Heading/Heading";
import BriefDescription from "../BriefDescription/BriefDescription";
import styles from "./Services.module.scss"

interface ServicesProps {
    servicesHeadline: string
}

const brief = [
    "Travel Plan",
    "Catering Service",
    "Babysitting",
    "Laundry",
    "Hire Driver",
    "Bar & Drink"
]

const Services: FC<ServicesProps> = ({ servicesHeadline }) => {
    return (
        <div className={styles.servicesContainer}>
            <div className={styles.services}>
                <Heading readerHeadline="What We Do" />
                <h2 className={styles.servicesHeadline}> { servicesHeadline } </h2>
            </div>
            <div className={styles.servicesManyContainer}>
                {brief.map((component, index) => {
                    return (
                        <BriefDescription
                            // cause no ID
                            key={index}
                            briefHeadline={component}
                            briefPar="Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut
                            labore et dolore magna."
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Services;