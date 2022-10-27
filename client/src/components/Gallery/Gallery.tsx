import React, {FC, useState} from 'react';
import UserLink from "../UI/UserLink/UserLink";
import FormBooking from "../FormBooking/FormBooking";
import styles from "./Gallery.module.scss"
import Description from "../Description/Description";

interface GalleryProps {
    headline: string,
    description: string
}

const Gallery: FC<GalleryProps> = ({ headline, description}) => {
    // state to change background
    const [background, setBackground] = useState([
        "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/hero/hero-3.jpg",
        "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/hero/hero-2.jpg",
        "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/hero/hero-1.jpg"
    ]);

    /// IN utils folder mb

   // const changeBack = (delay: number) => {
   //     setInterval(() => {
   //          for (let i = 0; i < background.length; i++) {
   //              setBackground(background[i])
   //                  }
   //      }, delay)
   //          }

    return (
        <div className={styles.galleryWrapper}>
            <div className={styles.sona}>
                <div className={styles.containerSona}>
                    <Description
                        headline={ headline }
                        description={description}
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