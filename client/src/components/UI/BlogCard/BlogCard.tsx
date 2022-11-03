import React, {FC} from 'react';
import BackButton from "../BackButton/BackButton";
import { AiFillClockCircle } from "react-icons/ai"
import styles from "./BlogCard.module.scss"


interface BlogCardProps {
    text: string,
    description: string,
    date: string,
    img: string
}

const BlogCard: FC<BlogCardProps> = ({
   text,
   description,
   date,
   img }) => {
    return (
        <div
            style={{ background: `url(${ img })` }}
            className={styles.container}
        >
             <BackButton text={text} />
             <h2 className={styles.headline}> { description } </h2>
            <div className={styles.containerClock}>
                 <AiFillClockCircle />
                 <a href="#" className={styles.link}> { date } </a>
            </div>
        </div>
    );
};

export default BlogCard;