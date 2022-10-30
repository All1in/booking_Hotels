import React, { FC } from 'react';
import styles from "./Proposes.module.scss"
import MyImage from "../UI/MyImage/MyImage";

interface ProposesProps {
    // props
}

interface MassiveImages {
    src: string,
    headline: string,
    price: number
}


const massiveOfImgs: MassiveImages[] = [
    {
        src: "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/room/room-b1.jpg",
        headline: "Double Room",
        price: 199
    },
    {
        src: "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/room/room-b2.jpg",
        headline: "Premium King Room",
        price: 159
    },
    {
        src: "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/room/room-b3.jpg",
        headline: "Deluxe Room",
        price: 198
    },
    {
      src: "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/room/room-b4.jpg",
      headline: "Family Room",
      price: 299
    }
]

const Proposes: FC<ProposesProps> = () => {
    return (
        <div className={styles.proposesContainer}>
            { massiveOfImgs.map((imageOfHotel, index) => {
                const { src, headline, price } = imageOfHotel;
                return (
                    <MyImage
                        key={index}
                        imageOfHotel={src}
                        headline={headline}
                        price={price}
                    />
                )
            })}
        </div>
    );
};

export default Proposes;