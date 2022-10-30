import React, { FC } from 'react';
import Price from "../Price/Price";
import UserLink from "../UserLink/UserLink";
import TableHotel from "../TableHotel/TableHotel";
import styles from "./MyImage.module.scss"


interface MyImageProps {
    imageOfHotel: string,
    headline: string,
    price: number
}



const MyImage: FC<MyImageProps> = ({imageOfHotel,headline, price}) => {
    return (
        <div
            style={{ background: `url(${imageOfHotel})` }}
            className={styles.myImageContainer}
        >
            <h3 className={styles.headline}> { headline } </h3>
            {/*Price*/}
            <div className={styles.imagesContainer}>
                <Price
                    pricing={price}
                    perWhat="Pernight"
                />
            </div>
            <div className={styles.hidden}>
                {/*/// Error*/}
                <TableHotel />
                {/*///Error*/}
                <UserLink linkCaption="More details"/>
            </div>
        </div>
    )
};

export default MyImage;