import React, { FC } from 'react';
import styles from "./Intercontinental.module.scss"
import Description from "../Description/Description";
import UserLink from "../UI/UserLink/UserLink";
import Heading from "../UI/Heading/Heading";
import Westlake from "../Westlake/Westlake";

interface IntercontinentalProps {
    /// props
}

const images = [
    "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/about/about-1.jpg",
    "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/about/about-2.jpg"
]

const Intercontinental: FC = ({}) => {
    return (
        <div className={styles.intercontinental}>
            <div className={styles.textContainer}>
                <Heading readerHeadline="About us" />
                <Westlake
                    headlineWestlake="Intercontinental LA Westlake Hotel"
                    paragraphWestlake="Sona.com is a leading online accommodation site.
                    We’re passionate about travel.
                    Every day, we inspire and reach millions of
                    travelers across 90 local websites in 41 languages."
                    anotherParagraph="So when it comes to booking the perfect hotel,
                            vacation rental, resort,
                            apartment, guest house, or tree house, we’ve got you covered."
                />
                <UserLink linkCaption="Read More"/>
            </div>
            {/*map*/}
            <div className={styles.imagesContainer}>
                {images.map(image => <img key={image} src={image} alt="image"/>)}
            </div>
        </div>
    );
};

export default Intercontinental;