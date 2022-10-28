import React, {FC, useEffect, useState} from 'react';
import UserLink from "../UI/UserLink/UserLink";
import FormBooking from "../FormBooking/FormBooking";
import styles from "./Gallery.module.scss"
import Description from "../Description/Description";

interface GalleryProps {
    headline: string,
    description: string
}

const Gallery: FC<GalleryProps> = ({ headline, description}) => {
    /// state to change background
    const [background, setBackground] = useState([
        "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/hero/hero-3.jpg",
        "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/hero/hero-2.jpg",
        "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/hero/hero-1.jpg"
    ]);
    /// index of element in massive
    const [num, setNum] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setNum(prevNum => {
                let n = prevNum;
                if (n === background.length - 1) {
                    n = 0;
                } else {
                    n++;
                }
                return n;
            });
        }, 3000);
        return () => {
            clearInterval(timer);
        }
    }, []);


    return (
        <div
            style={{backgroundImage: `url(${background[num]})`}}
            className={styles.galleryWrapper}
        >
            <div className={styles.sona}>
                <div className={styles.containerSona}>
                    <Description
                        headline={ headline }
                        description={description}
                    />
                    <UserLink
                        linkCaption="Discover Now"
                    />
                </div>
                <div className={styles.formWrapper}>
                    <FormBooking
                        title="Booking Your Hotel"
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;