import React, { FC } from 'react';
import Heading from "../UI/Heading/Heading";
import BriefDescription from "../BriefDescription/BriefDescription";
import styles from "./Services.module.scss"

interface ServicesProps {
    servicesHeadline: string
}

const Services: FC<ServicesProps> = ({ servicesHeadline }) => {
    return (
        <div className={styles.servicesContainer}>
            <div className={styles.services}>
                <Heading readerHeadline="What We Do" />
                <h2 className={styles.servicesHeadline}> { servicesHeadline } </h2>
            </div>
            <div className={styles.servicesManyContainer}>
                <BriefDescription
                    briefHeadline="Travel Plan"
                    briefPar="Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut
                            labore et dolore magna."
                />
                <BriefDescription
                    briefHeadline="Catering Service"
                    briefPar="Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut
                            labore et dolore magna."
                />
                <BriefDescription
                    briefHeadline="Babysitting"
                    briefPar="Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut
                            labore et dolore magna."
                />
                <BriefDescription
                    briefHeadline="Laundry"
                    briefPar="Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut
                            labore et dolore magna."
                />
                <BriefDescription
                    briefHeadline="Hire Driver"
                    briefPar="Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut
                            labore et dolore magna."
                />
                <BriefDescription
                    briefHeadline="Bar & Drink"
                    briefPar="Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut
                            labore et dolore magna."
                />
            </div>
        </div>
    );
};

export default Services;