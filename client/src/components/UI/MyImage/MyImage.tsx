import React, {FC, useRef, useState} from 'react';
import Price from "../Price/Price";
import UserLink from "../UserLink/UserLink";
import TableHotel from "../TableHotel/TableHotel";
// import useHover from "../../../hooks/useHover";
import styles from "./MyImage.module.scss"


interface MyImageProps {
    imageOfHotel: string,
    headline: string,
    price: number
}



const MyImage: FC<MyImageProps> = ({
       imageOfHotel,
       headline,
       price}) => {
    const ref = useRef<HTMLDivElement>(null)
    /// custom hook
    // const { isHovering } = useHover(ref)
    /// custom hook
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
            <div
                ref={ref}
                // need to be hidden
                className={styles.hidden}
            >
                <TableHotel />
                <UserLink linkCaption="More details"/>
            </div>


            {/*{*/}
            {/*    isHovering*/}
            {/*        &&*/}
            {/*            <div*/}
            {/*                ref={ref}*/}
            {/*                className={styles.hidden}*/}
            {/*            >*/}
            {/*                <TableHotel />*/}
            {/*                <UserLink linkCaption="More details"/>*/}
            {/*            </div>*/}
            {/*}*/}
        </div>
    )
};

export default MyImage;