import React, { FC } from 'react';
// import BackButton from "../UI/BackButton/BackButton";
import Heading from "../UI/Heading/Heading";
import styles from "./TravelTrip.module.scss"
import BlogCard from "../UI/BlogCard/BlogCard";

interface TravelTripProps {
    // props
}

interface blogInfo {
    id: number,
    textForButton: string,
    description: string,
    date: string // or not string
    src: string
}

const imagesForTours: blogInfo[] = [
    {
        id: 0,
        textForButton: "Travel Trip",
        description: "Tremblant In Canada",
        date: "15th April, 2019",
        src: "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/blog/blog-1.jpg",
    },

    {
        id: 1,
        textForButton: "Camping",
        description: "Choosing A Static Caravan",
        date: "15th April, 2019",
        src: "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/blog/blog-2.jpg",
    },

    {
        id: 2,
        textForButton: "Event",
        description: "Copper Canyon",
        date: "21th April, 2019",
        src: "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/blog/blog-3.jpg",
    },

    {
        id: 3,
        textForButton: "Event",
        description: "Trip To Iqaluit In Nunavut A Canadian Arctic City",
        date: "08th April, 2019",
        src: "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/blog/blog-wide.jpg",
    },

    {
        id: 4,
        textForButton: "Travel",
        description: "Traveling To Barcelona",
        date: "12th April, 2019",
        src:"https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/blog/blog-10.jpg"
    }
]

const TravelTrip: FC<TravelTripProps> = () => {
    return (
        <div className={styles.travelTripContainer}>
            <Heading readerHeadline="Hotel News" />
            <h2 className={styles.heading}> Our Blog & Event </h2>
            <div className={styles.gridGallery}>
                { imagesForTours.map(image => {
                    const { id, textForButton, description, date, src } = image
                    return (
                        <BlogCard
                            key={id}
                            text={textForButton}
                            description={description}
                            date={date}
                            img={src}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default TravelTrip;